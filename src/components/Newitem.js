import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Newscard from './Newscard';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "./Spinner"
import Spin from "./Spin"

export default class Newitem extends Component {
    static defaultProps =
        {
            country: "in",
            category: "general",
        }
    static propTypes =
        {
            country: PropTypes.string,
            category: PropTypes.string
        }
    constructor(props) {
        super(props)
        this.state =
        {
            articles: [],
            page: 1,
            totalResults: 0,
            loading: false
        }
    }
    async updateNews() {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pazeSize=20&page=${this.state.page}`
        this.setState({ loading: true })
        let response = await fetch(url)
        let responded = await response.json()
        this.setState({
            articles: responded.articles,
            loading: false,
            totalResults: responded.totalResults
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews()
    }
    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pazeSize=20&page=${this.state.page+1}`
        this.setState({ page: this.state.page + 1 })
        let response = await fetch(url)
        let responded = await response.json()
        this.setState({
            articles: this.state.articles.concat(responded.articles),
            totalResults: responded.totalResults,
            
        })
    };
    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: '5px 0px', marginTop: '20px' }}>NewsMonkey - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
                {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spin/>}
                    >
                    <div className="container">
                        <div className="row ">
                            {this.state.articles.map((element) => {
                                return <Newscard refe={element.url} key={element.id} title={element.title} imgurl={element.urlToImage} description={element.description} author={element.author} date={element.publishedAt} />
                            })}
                        </div>
                        </div>
                    </InfiniteScroll>
            </>
        )
    }
}
