import React from 'react'
import { Router,router, Route, hashHistory } from 'react-router'
import $ from 'jquery'
export default React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      error: null,
      data: null,
    };
  },
  componentDidMount() {
    document.title = "政策法规";$$('pageTit').innerText = "政策法规";
    var dataObj={waterCorpId:1};
    var that = this;
    $.post(ip_url+'/watercorpserver/nt/policy.json',{"requestPara": JSON.stringify(dataObj)},function(value){
         that.setState({loading: false, data: value});
         console.log(value);
    })
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  handleClick: function(res) {
          localStorage.LawTitle = res.biaoti;
          localStorage.LawTime = res.time;
          localStorage.LawContent = res.neirong;
          this.context.router.push('/LawContent')
  },
  render: function() {
    if (this.state.loading) {
      return <div className="h240 ub-apc">Loading<dot>...</dot></div>;
    } else if (this.state.error !== null) {
      return <div className="textTips"><span>{error.message}</span></div>;
    } else {
      var repo = this.state.data.data;
      var self = this;
      var repoList = repo.map(function (repo,index) {
        return (
          <div className="h60 ub-ac mt05 plr15 bgb btbc" key={index} onClick={self.handleClick.bind(null,repo)}>
                <div className="ub-f1">
                    <h3 className="mt05 ulev1">{repo.biaoti}</h3>
                    <p className="bc mt10 ulev0">{repo.time}</p>
                </div>
                <div className="ml10 arrow-right ub-img7"></div>
            </div>
        );
      });
      return (
        <div>{repoList}</div>
      );
    }
  }
});
