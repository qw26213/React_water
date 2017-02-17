import React from 'react'
import { Link } from 'react-router' 
import $ from 'jquery' 
export default React.createClass({
  handleClick: function() {
    window.history.back();
  },
  getInitialState: function() {
    return {
      loading: true,
      error: null,
      data: null,
    };
  },

  componentDidMount() {
    var dataObj={waterCorpId:1}
    var that = this;
    $.post('http://123.57.47.236:8091/watercorpserver/nt/noticeList.json',{"requestPara": JSON.stringify(dataObj)},function(value){
         that.setState({loading: false, data: value});
    })
  },

  render: function() {
    if (this.state.loading) {
      return <div className="h240 ub-apc">Loading<dot>...</dot></div>;
    } else if (this.state.error !== null) {
      return <div className="textTips uhide"><span>{error.message}</span></div>;
    } else {
      var repo = this.state.data.data;
      var repoList = repo.map(function (repo, index) {
        return (
                    <div className="ub bjindu">
                         <div className="ub w30 ub-ver mr05">
                                <div className="top ub-f1 w100"></div>
                                <div className="bop ub-f1 w100"></div>
                                <img src={require('../../images/to.png')} />
                         </div>
                         <div className="annoBox ub-f1 plr10 mt10 mb10">
                             <div className="bbdc">{repo.sday}至{repo.eday}</div>
                             <div className="bbdc">影响范围：{repo.address}</div>
                             <div className="bbdc">停水原因：{repo.reason}</div>
                         </div>
                    </div>
       );
      });
      return (
        <div className="plr10">{repoList}</div>
      );
    }
  }
});
