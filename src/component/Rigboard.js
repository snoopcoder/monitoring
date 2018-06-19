import React, { Component } from "react";
import "./Rigboard.css";

export class Rigboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="rigIndc">*</div>
        <div className="rigNamec ">{this.props.RigName}</div>
        <div className="rigGPUCountc " />
        <div className="rigIPAddrc ">{this.props.RigAddress}</div>
        <div className="rigMiner ">CCM</div>
        <div className="rigMinerVerc ">3.2</div>
        <div className="rigTotalSpeedc " />
        <div className="rigMidlc">
          <div className="rigMidlLinec" />
        </div>
        <div className="rigInfoBoxc " />
        <div className="rigSyncLessc ">128s</div>
        <div className="rigUptimec ">0d 1h 23m</div>
        <div className="rigStatusc ">{this.props.RigStatus}</div>
      </div>
    );
  }
}
export default Rigboard;
