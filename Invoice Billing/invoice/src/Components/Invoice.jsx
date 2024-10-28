import React from 'react'
import './Invoice.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup, Table, Spinner } from 'reactstrap';
import { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import Select from 'react-select'


const Invoice = () => {

    const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    setName("");
    setAddress("");
    setDesignation("");
    setRate("");
    setQuantity("");
    setItem([]);
    setGstValue("");
    setDiscount("");
    setError(false);
    setInvalidError(false);
    setRowArray([]);
    setAmount(0);
    setTotalAmount(0);
    setUpdate(false)
    
 }

  const[name,setName] = useState("");
  const[address,setAddress] = useState("");
  const[designation,setDesignation]=useState("");
  const[dataArray,setDataArray]=useState([]);
  const [item,setItem]=useState([]);
  const ItemOptions = [{ name: "Pipe", label: "Pipe" }, { name: "Paint", label: "Paint" },{ name: "Cement" , label:"Cement"},
  { name: "Steel" , label:"Steel"},{ name: "Rope" , label:"Rope"}];
  const[quantity,setQuantity]=useState("");
  const[rate,setRate]=useState("");
  const[discount,setDiscount]=useState("");
  const [gstValue, setGstValue] = useState("");
  const gstSelect = [
    { value: "5%", label: "5%", percent:"5" },
    { value: "12%", label: "12%",percent:"12" },
    { value: "18%", label: "18%",percent:"18" },
    { value: "28%", label: "28%",percent:"28" },
 ];

 const [amount,setAmount]=useState(0);
 const [totalAmount,setTotalAmount]=useState(0);

 const [invalidError, setInvalidError] = useState(false)
 const [error,setError]=useState(false)
 const [loading,setLoading] = useState(false);

 const selectGst = (gst) => {
  // console.log("gst-------",gst);
  var numberGst = Number(gst.percent)
  var gstvaluenew = (numberGst * amount)/100
  var totalamount  = amount + gstvaluenew
  // console.log("gstvaluenew",gstvaluenew);
  setTotalAmount(totalamount)
 }

 const amountCalculation = (rate , quantity, discount) =>{
  var rateNew = Number(rate)
  var quantityNew = Number(quantity)
  var discountNew = Number(discount)

  var amount  = ((rateNew * quantityNew)-discountNew)
  // console.log("Amount=============",amount);
  setAmount(amount)
  if (gstValue === undefined || gstValue === "" || gstValue === null) {
      setTotalAmount(amount)
  }else{
      var numberGst = Number(gstValue.percent)
      var gstvaluenew = (numberGst * amount)/100
      var totalamount  = amount + gstvaluenew
      // console.log("gstvaluenew",gstvaluenew);
      setTotalAmount(totalamount)
  }
  
 } 

 const amountNewCalculation = (rate,quantity,gstValue,discount,i) =>{
  var rowArrayData = [...rowArray]

  rowArrayData[i].rate = Number(rate)
  rowArrayData[i].quantity = Number(quantity)
  rowArrayData[i].discount = Number(discount)

  var amount = ((rowArrayData[i].rate) * ( rowArrayData[i].quantity))-(rowArrayData[i].discount)
  rowArrayData[i].amount = amount
  
  if (gstValue && gstValue.percent) {
    var gstvaluenew = (gstValue.percent * amount) / 100;
    var totalamount = amount + gstvaluenew;
    rowArrayData[i].gst = gstValue;
    rowArrayData[i].total = totalamount;
 } else {
     rowArrayData[i].total = amount
 }
  //  rowArrayData[i].gst = Number(gstValue.percent)
  // var gstvaluenew = (Number(rowArrayData[i].gst) * Number(rowArrayData[i].amount))/100
  // var totalamount  =  rowArrayData[i].amount + gstvaluenew
  // // console.log("gstvaluenew",gstvaluenew);
  // rowArrayData[i].gst = gstValue
  // rowArrayData[i].discount= discount
  // rowArrayData[i].total = totalamount
  setRowArray(rowArrayData)
  console.log("rowArray-----------",rowArrayData)
 }

  const Generate =()=>{
    
    if(name === "" || name === undefined || address === "" || address === undefined || designation === "" || designation === undefined){
      setError(true);
      setInvalidError(true);
    }
 else{
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    setModal(!modal);
  }, 2000);
    var array = dataArray
    const data = {
      Name:name,
      Address:address,
      Designation:designation,
      Item: rowArray.map(row => row.item),
      Rate:rowArray.map(row => row.rate),
      Quantity:rowArray.map(row => row.quantity),
      Amount:rowArray.map(row => row.amount),
      Discount:rowArray.map(row => row.discount),
      Gst:rowArray.map(row=>row.gst),
      Total:rowArray.map(row=>row.total)
    }
    array.push(data);
    setDataArray(array);
    console.log("Data Array-----",dataArray)
  }
  }

  const [rowArray, setRowArray] = useState([]);
 
  const addRow =()=>{
    // console.log("Add row");
    
    const rowobj = {
      item: item,
      rate: rate,
      quantity: quantity,
      amount: amount,
      gst: gstValue,
      discount: discount,
      total: totalAmount,
    }
    rowArray.push(rowobj);
    console.log("rowArray====",rowArray);
    setRowArray([...rowArray]);
    setItem([])
        setRate("")
        setQuantity("")
        setAmount("")
        setGstValue("")
        setTotalAmount("")
        setDiscount("")
 }

 const deleteRow =(i)=>{
  // console.log("Delete Row");
  let deleterow = [...rowArray];
  deleterow.splice(i,1);
  setRowArray(deleterow);
 }

  const deleteData = (i)=>{
  //  console.log(i,"delete me")
   let deleteArray = [...dataArray];
   deleteArray.splice(i,1);
   setDataArray(deleteArray);
  }

  const[index,setIndex] = useState("");
  const [update,setUpdate]=useState(false);

  const selectData = (i)=>{
    // console.log("selected data=============", dataArray[i]);
    setModal(!modal);
    setName(dataArray[i].Name);
    setAddress(dataArray[i].Address);
    setDesignation(dataArray[i].Designation);
    setRowArray(dataArray[i].Item.map(
      (item,index)=>({
        item:dataArray[i].Item[index],
        rate: dataArray[i].Rate[index],
        quantity:dataArray[i].Quantity[index],
        amount:dataArray[i].Amount[index],
        gst: dataArray[i].Gst[index],
        discount:dataArray[i].Discount[index],
        total:dataArray[i].Total[index],
        
      })))
    setIndex(i);
    setUpdate(true)

  }

  const updateData = ()=>{

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setModal(!modal);
      setUpdate(false);
  }, 2000);


  if(index !== null){
      const updatedArray = [...dataArray];
      updatedArray[index]={
          Name:name,
          Address:address,
          Designation:designation,
          Item: rowArray.map(row => row.item),
          Rate: rowArray.map(row => row.rate),
          Quantity: rowArray.map(row => row.quantity),
          Amount: rowArray.map(row => row.amount),
          Discount: rowArray.map(row => row.discount),
          Gst: rowArray.map(row => row.gst),
          Total: rowArray.map(row => row.total)
      }
      // console.log("updated array---",updatedArray);
      setDataArray(updatedArray);
  }
  }


  const changeItem=(value,i)=>{
   
    const newArray = [...rowArray];
    newArray[i].item = value;
    setRowArray(newArray);
    // console.log("rowArray--------------------------",newArray);

  }

  const totalCost = (i) => {
    let totalCost = 0;
    dataArray[i].Total.forEach((total) => {
      totalCost += total;
    });
    totalCost = Number(totalCost.toFixed(2));
    return totalCost;
  };
    
//   let totalSum = 0;
// rowArray.forEach((row) => {
//     totalSum += row.total;
// });

  return (
    <>
     <div>
      <Button color="primary" className='modal-button' onClick={toggle}>Create Invoice</Button>

      <Modal size='lg' isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Invoice Billing</ModalHeader>
        <ModalBody>
          <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                <FormGroup>
                <Label for="Name">Name<span style={{ color: "red" }}>*</span></Label>
                <Input id="Name" invalid={invalidError && name === "" ? true : false}  name="Name" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
                </FormGroup>
                </div>

                <div className="col-4">
                <FormGroup>
                <Label for="Address">Last Name<span style={{ color: "red" }}>*</span></Label>
                <Input id="Address" invalid={invalidError && address === "" ? true : false} name="Address" placeholder='Last Name' value={address} onChange={(e)=>{setAddress(e.target.value)}} />
                </FormGroup>
                </div>
                
                <div className="col-4">
                <FormGroup>
                <Label for="Designation">Designation<span style={{ color: "red" }}>*</span></Label>
                <Input id="Designation" invalid={invalidError && designation === "" ? true : false} name="designation" placeholder='Designation' value={designation} onChange={(e)=>{setDesignation(e.target.value)}} />
                </FormGroup>
                </div>
            </div>
            <div className="row">
              <Table  className='invoice-table'>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Rate <i class="fa fa-inr me-1"></i></th>
                    <th>Quantity</th>
                    <th>Amount <i class="fa fa-inr me-1"></i></th>
                    <th>Gst</th>
                    <th>Discount <i class="fa fa-inr me-1"></i></th>
                    <th>Total <i class="fa fa-inr me-1"></i></th>
                    <th><Button color='primary' onClick={()=>{addRow()}}>+</Button></th>
                  </tr>
                </thead>
                <tbody>
                {rowArray.map((row,i) => {
                  return(
            <tr key={i}>
               
                <td><Typeahead
                      id="Item"
                      onChange={(value)=>{changeItem(value,i)}}
                      onInputChange={(value)=>{changeItem(value,i)}}
                      options={ItemOptions} 
                      selected={row.item}
                      placeholder="Item"
                    /></td>   

                    <td><Input id='Rate' name='Rate'  placeholder='Rate'type='number' value={row.rate} 
                    onChange={(e) => {amountNewCalculation(e.target.value,row.quantity,row.gst,row.discount,i)
                  }} /></td>

                    <td><Input id='Quantity'  name='Quantity' placeholder='QTY' type='number' value={row.quantity} 
                    onChange={(e)=>{amountNewCalculation(row.rate,e.target.value,row.gst,row.discount,i)}}/></td>

                    <td><Input id='Amount' name='Amount' placeholder='Amount' disabled value={row.amount} type='number'  /></td>

                    <td style={{width:"120px"}}><Select value={row.gst} options={gstSelect} placeholder="GST" 
                    onChange={(e) => {amountNewCalculation(row.rate,row.quantity,e,row.discount,i)
                                        
                                    }} /></td>

                    <td><Input id='Discount' name='Discount'  placeholder='Discount' type='number'  value={row.discount} 
                    onChange={(e)=>{amountNewCalculation(row.rate,row.quantity,row.gst,e.target.value,i)}}/></td>

                    <td><Input id='Total' name='Total' placeholder='Total' disabled value={row.total}/></td>
                    
                    <td><Button color='danger' onClick={()=>{deleteRow(i)}}>X</Button></td>
                    
                    
                    
            </tr>)
     })}
   
     <tr>
     <td><Typeahead
                      highlightOnlyResult minLength={1}
                      id="Item"
                      onChange={(e)=>{setItem(e)}}
                      onInputChange={(e)=>{setItem(e)}}
                      options={ItemOptions} 
                      selected={item}
                      placeholder="Item"
                    /></td> 

     <td><Input id='Rate' name='Rate'  placeholder='Rate'type='number' value={rate}
      onChange={(e)=>{setRate(e.target.value)
      amountCalculation(e.target.value,quantity,discount)}}/></td>

     <td><Input id='Quantity'  name='Quantity' placeholder='QTY' type='number' value={quantity} 
     onChange={(e)=>{setQuantity(e.target.value)
     amountCalculation(rate,e.target.value,discount)}}/></td>

     <td><Input id='Amount' name='Amount' placeholder='Amount' disabled value={amount} type='number'  /></td>
     <td style={{width:"100px"}}><Select value={gstValue} options={gstSelect} placeholder="GST" onChange={(e) => {
                                        setGstValue(e)
                                        selectGst(e)
                                    }} /></td>

     <td><Input id='Discount' name='Discount'  placeholder='Discount' type='number'  value={discount} 
     onChange={(e)=>{setDiscount(e.target.value)
     amountCalculation(rate,quantity,e.target.value)}}/></td>

     <td><Input id='Total' name='Total' placeholder='Total' disabled value={totalAmount}/></td>
     {/* <td>{totalSum}</td> */}
     {/* <td><Button color='danger' onClick={(i)=>{deleteRow(i)}}>X</Button></td> */}
     </tr>
                  
                   
                  
                </tbody>
              </Table>
            </div>
           
          </div>
        </ModalBody>
        <ModalFooter>
        {error ? <span style={{ color: "red", marginRight: "150px" }}>Please fill in the required details</span> : ""}
          
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>{' '}
          {update ? <Button color='success' onClick={updateData} disabled={loading}>{loading ? "Updating":"Update"}{loading ? <span><Spinner animation="border" variant="primary" size='sm' /></span> : ""}</Button>:
          <Button color="success" onClick={Generate} disabled={loading}>{loading ? "Generating":"Generate"}{loading ? <span><Spinner animation="border" variant="primary" size='sm' /></span> : ""}</Button>}
          
        </ModalFooter>
      </Modal>
     </div>
     {/* ............................................................................................................................... */}
    
     <div className="container-fluid table">
        <Table dark striped hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Designation</th>
                    <th>Item</th>
                    <th>Rate</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Discount</th>
                    <th>GST</th>
                    <th>Total</th>
                    <th>Total Cost</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataArray.map(
                        (value,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{value.Name}</td>
                                    <td>{value.Address}</td>
                                    <td>{value.Designation}</td>
                                    <td>{value.Item.map((item,index)=>(
                                      <div key={index}>
                                        {item ? (item.length > 0 ? item[0].label:""):""}
                                      </div>
                                    ))}</td>
                                    <td>{value.Rate.map((rate, index) => (
                                      <div key={index}>
                                        <i className="fa fa-inr me-1"></i>{rate}
                                      </div>
                                    ))}</td>

                                    <td>{value.Quantity.map(
                                      (quantity,index)=>(
                                        <div key={index}>
                                          {quantity}
                                        </div>
                                      )
                                    )}</td>

                                <td>{value.Amount.map(
                                      (amount,index)=>(
                                        <div key={index}>
                                          <i className="fa fa-inr me-1"></i>{amount}
                                        </div>
                                      )
                                    )}</td>

                                <td>{value.Discount.map(
                                      (discount,index)=>(
                                        <div key={index}>
                                          <i className="fa fa-inr me-1"></i>{discount}
                                        </div>
                                      )
                                    )}</td>

                                <td>{value.Gst.map(
                                      (gst,index)=>(
                                        <div key={index}>
                                          {gst ? gst.label:""}
                                        </div>
                                      )
                                    )}</td>

                                    <td>{value.Total.map(
                                      (total,index)=>(
                                        <div key={index}>
                                          <i className="fa fa-inr me-1"></i>{total}
                                        </div>
                                      )
                                    )}
                                    </td>
                                    <td> <i className="fa fa-inr me-1"></i>{totalCost(i)}</td>
                                    <td><Button className=' ms-1' color="danger" onClick={() => deleteData(i)}>Delete</Button>
                                    <Button color='primary ms-1' onClick={()=>{selectData(i)}}>Edit</Button></td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </Table>
      </div>
    </>
  )
}

export default Invoice