/**
 * Created by lyn on 2017/2/22.
 */
import React from 'react';
import {
    InfiniteLoader,
    PullToRefresh,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter
    } from 'react-weui';

const momentLoader = require('../css/img/loading.png');

class PtrDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,]
        }
    }

    render(){
        return (
            <InfiniteLoader
                onLoadMore={ (resolve, finish) => {
                    console.log("chufala")
                    //mock request
                    setTimeout( ()=> {
                        if(this.state.items.length > 22){
                            finish()
                        }else{
                            this.setState({
                                items: this.state.items.concat([this.state.items.length])
                            }, ()=> resolve())
                        }
                    }, 1000)
                }}
            >
                <div className="infinite" title="Infinite Loader" subTitle="滚动加载" >

                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <CellsTitle>List with 22 Max</CellsTitle>
                    <Cells>
                    {
                        this.state.items.map( (item, i) => {
                            return (
                                <Cell href="javascript:;" key={i} access>
                                    <CellBody>
                                        {item}
                                    </CellBody>
                                    <CellFooter/>
                                </Cell>
                            )
                        })
                        }
                    </Cells>

                </div>
            </InfiniteLoader>
        )
    }
}

export default PtrDemo;