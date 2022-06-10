import React from "react";
import styles from '../styles/Home.module.css'


class BarRange extends React.Component {
  
  valuesmonthly = [
     { thread:'100',  title:'Unmetered  Residential Elite 100',  pricethread:'$1.99', price:'$199.00' },
     { thread:'200',  title:'Unmetered  Residential Guru 200', pricethread:'$1.50', price:'$299.00' },
     { thread:'500',  title:'Unmetered  Residential Mega 500', pricethread:'$1.20', price:'$599.00' },
     { thread:'1000', title:'Unmetered  Residential Pro 1000', pricethread:'$1.10', price:'$1,099.00' },
     { thread:'2000', title:'Unmetered  Residential Giga 2000', pricethread:'$1.00', price:'$1,999.00' },
     { thread:'5000', title:'Unmetered  Residential Gold 5000', pricethread:'$0.88', price:'$4,399.00' },
    ];

    valuesyearly = [
      { thread:'100',  title:'Unmetered  Residential Elite 100',  pricethread:'$1.67', price: '$1,999.00' },
      { thread:'200',  title:'Unmetered  Residential Guru 200',  pricethread:'$1.25', price:'$2,999.00' },
      { thread:'500',  title:'Unmetered  Residential Mega 500',  pricethread:'$1.00', price:'$5,999.00' },
      { thread:'1000', title:'Unmetered  Residential Pro 1000', pricethread:'$0.92', price:'$10,999.00' },
      { thread:'2000', title:'Unmetered  Residential Giga 2000', pricethread:'$0.83', price:'$19,999.00' },
      { thread:'5000', title:'Unmetered  Residential Gold 5000', pricethread:'$0.73', price:'$43,999.00' },
     ];

  constructor(props) {
    super(props);
    this.state = {
      currentStepIndex: 0,
      values : this.valuesmonthly,
      type: "Mon"
    };
  }

  handleInputChange = e => {
    this.setState({ currentStepIndex: e.currentTarget.value });
    let current_thread = this.state.values[e.currentTarget.value].thread;
    let arry_len = this.state.values.length;
    let last_thread = this.state.values[arry_len-1].thread;
    let first_thread = this.state.values[0].thread;
    if (current_thread == last_thread || current_thread == first_thread){
      this.setState({ price_amt: '' });
    }
    else{
      this.setState({ price_amt: current_thread});
    }
    
  };

  handleChange = e => {
    const { value } = e.target;
    
    if (value=='Monthly'){
      this.setState({ values: this.valuesmonthly });
      this.setState({ type:'Mon'})
    }
    else{
      this.setState({ values: this.valuesyearly });
      this.setState({ type:'Year'})
    }

  };


  render() {
  return (
      <>
          <h4>{this.state.values[this.state.currentStepIndex].title}</h4>
           <div className={styles.d_flex} >
                  <div className='labels'>
                     <h6><small>●</small> <b>Number Of Threads</b>
                     <span>{this.state.values[this.state.currentStepIndex].thread}
                       </span>
                       </h6>
                       <h6><small>●</small> <b> Price per Threads </b>
                         <span>{this.state.values[this.state.currentStepIndex].pricethread}</span>
                        </h6>
                  </div>
                  <div className='bar-ranges'>     
                  <div className="threads">
                      <span>100 Threads </span>
                      <span className={"d-none active" + this.state.price_amt}>{this.state.price_amt} Threads</span>
                      <span>5000 Threads </span>
                    </div>
                    <input
                      onInput={this.handleInputChange}
                      type="range"
                      min="0"
                      value={this.state.currentStepIndex}
                      max="5"
                      step="1"
                      list="tick-list"
                    />
                 </div>     
             </div>
             <div className={styles.d_flex} >
                   <div className='pack-select'>
                     <div>
                       <label>Monthly</label>
                       <input type="radio" value="Monthly" name="pack" onChange={this.handleChange} defaultChecked />
                     </div>
                     <div>
                       <label>Yearly <span>(save 17%)</span></label>
                       <input type="radio" value="Yearly" name="pack" onChange={this.handleChange} />
                     </div>
                   </div>
                   <div className='total-pay'>
                     <h4>{this.state.values[this.state.currentStepIndex].price}<small> / {this.state.type}</small></h4>
                   </div>
                   <div className='action-pay text-center'>
                     <button>Start Now</button>
                     <p>Get Started in 10 minutes</p>
                   </div>
                </div>
       </>
    );
  }
}
export default BarRange;