import React from 'react'
export default React.createClass({
  getInitialState: function() {
    return {
      title:localStorage.LawTitle,
      time:localStorage.LawTime,
      content:localStorage.LawContent,
      };
    },
    render: function() {
          return (
                <div className="lawcontent p15">
                    <h2 className="tx-c ulev2">{this.state.title}</h2>
                    <p className="tx-c bc time ulev-1 lh36">{this.state.time}</p>
                    <div  className="content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                </div>
          );
      }
});
