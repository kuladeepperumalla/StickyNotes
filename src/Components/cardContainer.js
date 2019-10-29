import React, { Component } from  "react";
import {Button} from 'react-bootstrap';
import axios from 'axios';

class Cards extends Component {
    constructor(props){
        super(props);
        this.state={
            apiRes: [], 
            initialData: 4  
        };  
        this.loadMore = this.loadMore.bind(this);
        this.loadLess = this.loadLess.bind(this);
    }

    componentDidMount() {
        axios.get('https://www.reddit.com/r/reactjs.json').then(res => { 
            const apiRes = res.data.data.children.map(post => post.data);
            console.log(res);
            this.setState({apiRes});
        })
    }

    loadMore() {
        let apiResLength = this.state.apiRes.length;
        this.setState({initialData: apiResLength});
    }

    loadLess() {
        let lessData = 4;
        this.setState({initialData : lessData});
    }

    render() {
        return(           
            <div>
                {this.state.apiRes.slice(0, this.state.initialData).map(post =>
                <div key={post.id} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 bodycard">
                    <div className="card-title">{post.title}</div>
                        <div className="card-text">
                            <div className="card-url">
                           <span className="child-heading">Url : &nbsp; </span> <span className="card-url">{post.url}</span> 
                            </div>                            
                            <div className="card-score">
                            <span className="child-heading">Score : &nbsp; </span>{post.score}
                            </div>
                            <div className="card-body">
                            <span className="child-heading">Selftext_html : &nbsp; </span>{post.selftext_html === null? <span className="card-empty">No data to display!</span> : post.selftext_html}
                            
                        </div>
                    </div>
                </div>)}
                <div>
                   {this.state.initialData === 4 ?
                   <Button onClick={this.loadMore} className="card-button" variant="success">Load More...</Button>
                   :
                   <Button onClick={this.loadLess} className="card-button" variant="success">Load Less...</Button>
                   }
                </div>
            </div>
        );
    }
}
export default Cards;