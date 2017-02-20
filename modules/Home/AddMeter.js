import React from 'react'
export default React.createClass({
   getInitialState:function(){
      return {
          name:'',number:''
      }
   },
   componentDidMount() {
      document.title = "添加水表";document.getElementById('pageTit').innerText = "添加水表";
  },

   handlNameChange:function(event){
        this.setState({name:event.target.value});
   },handlNumberChange:function(event){
        this.setState({number:event.target.value})
   },

    handleSubmit:function(event){
      if(this.state.name==""){
        alert("名字不能为空")
      }
    },

   render() {
    return (
    <div>
        <div className="plr15 bgb mt10">
            <div className="h40 ub bbc ub-ac">
                <label className="w60">水司名</label>
                <input type="text" placeholder="请输入水司名" className="h30 lh30 ulev0 ub-f1"  onChange={this.handlNameChange}/>
            </div>
            <div className="h40 ub bbc ub-ac">
                <label className="w60">水表号</label>
                <input type="text" placeholder="请输入水表号" className="h30 lh30 ulev0 ub-f1" onChange={this.handlNumberChange}  />
            </div>
        </div>
        <div className="nextFoot tx-c plr15">
            <button className="w100 h40" onClick={this.handleSubmit}>下一步</button>
        </div>
    </div>
    );
  }
})
