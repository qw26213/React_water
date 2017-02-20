import React from 'react'
import GM from '../../public/js/G2-mobile-chart';

export default React.createClass({
   componentDidMount() {
      GM.Global.pixelRatio = 2;
      var Util = GM.Util;
      var data = [
        {"time": '1',"tem": 10},
        {"time": '2',"tem": 20},
        {"time": '3',"tem": 10},
        {"time": '4',"tem": 10},
        {"time": '5',"tem": 10},
        {"time": '6',"tem": 10},
        {"time": '7',"tem": 10},
        {"time": '8',"tem": 5},
        {"time": '9',"tem": 10},
        {"time": '10',"tem": 8},
        {"time": '11',"tem": 9},
        {"time": '12',"tem": 10}
      ];
      var chart = new GM.Chart({id: 'myChart'});
      var defs = {
        time: {
          type: 'timeCat',
          mask: '0',
          tickCount: 2,
          range:[0,1]
        },
        tem: {
          tickCount: 5,
          min: 0
        }
      };
      var label = {
        fill: '#979797',
        font: '5px san-serif',
        offset: 6
      };
      chart.axis('time', {
        label: function (text, index, total) {
          var cfg = Util.mix({}, label);
          if (index === 0) {
            cfg.textAlign = 'start';
          }
          if (index > 0 && index === total - 1) {
            cfg.textAlign = 'end';
          }
          return cfg;
        }
      });
      chart.axis('tem', {
        label: {
          fontSize: 5
        }
      });
      chart.source(data, defs);
      chart.line().position('time*tem').shape('smooth');
      chart.point().position('time*tem');
      chart.render();
  },
  render() {
    return (
    <div className="ub-apc h240">
        <canvas id="myChart"></canvas>
    </div>
    );
  }
})
