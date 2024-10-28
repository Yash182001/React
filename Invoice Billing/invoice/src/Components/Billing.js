import React, { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead';
import Select from 'react-select'
import './Invoice.css'
import { Button,Input,Table } from 'reactstrap';


const Billing = () => {
    const [itemArray, setItemArray] = useState([]);
    const [itemName, setItemName] = useState([]);
    const [rate, setRate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [amount, setAmount] = useState("");
    const [gstValue, setGstValue] = useState("");
    const [totalAmount, setTotalAmount] = useState("");


    const ItemOptions = [
        { name: "Pipe", label: "Pipe" },
        { name: "Paint", label: "Paint" },
        { name: "Cement", label: "Cement" },
        { name: "Steel", label: "Steel" },
        { name: "Rope", label: "Rope" }];



    const gstSelect = [
        { value: "5%", label: "5%", percent : "5" },
        { value: "12%", label: "12%", percent : "12" },
        { value: "18%", label: "18%", percent : "18" },
        { value: "28%", label: "28%", percent : "28" },
    ];

    const handleItemSelect = (value) => {
        console.log("Value----------------", value);
        setItemName(value)
    }

    const handleItemSelectArray = (index,value) => {
        console.log("Value----------------", value);
        console.log("index----------------", index);
        var itemArrayData = [...itemArray]
        itemArrayData[index].item_name = value
        setItemArray(itemArrayData)
    }

    const amountCalculation = (rate , qty) =>{
        var rateNew = Number(rate)
        var qtyNew = Number(qty)
        var amount  = rateNew * qtyNew
        console.log("Amount=============",amount);
        setAmount(amount)
        if (gstValue == undefined || gstValue == "" || gstValue == null) {
            setTotalAmount(amount)
        }else{
            var numberGst = Number(gstValue.percent)
            var gstvaluenew = (numberGst * amount)/100
            var totalamount  = amount + gstvaluenew
            console.log("gstvaluenew",gstvaluenew);
            setTotalAmount(totalamount)
        }
        
    }

    const selectGst = (gst) => {
        console.log("gst-------",gst);
        var numberGst = Number(gst.percent)
        var gstvaluenew = (numberGst * amount)/100
        var totalamount  = amount + gstvaluenew
        console.log("gstvaluenew",gstvaluenew);
        setTotalAmount(totalamount)
    }
    // console.log("itemArray------------",itemArray);
    const addData = () => {
        var itemArrayData = [...itemArray]
        var obj ={
            item_name : itemName,
            rate_value : rate,
            qty_value : quantity,
            amount_value : amount,
            gst_value : gstValue,
            total_amount : totalAmount
        }
        itemArrayData.push(obj)
        console.log("itemArrayData----------------",itemArrayData);
        setItemArray(itemArrayData)
        setItemName([])
        setRate("")
        setQuantity("")
        setAmount("")
        setGstValue("")
        setTotalAmount("")
    }
    const amountNewCalculation = (rate,qty,index) =>{
        var itemArrayData = [...itemArray]

        itemArrayData[index].rate_value = Number(rate)
        itemArrayData[index].qty_value = Number(qty)

        var amount = Number( itemArrayData[index].rate_value) * Number( itemArrayData[index].qty_value)
        itemArrayData[index].amount_value = amount

        setItemArray(itemArrayData)
    }
    return (
        <div className='newSection container' style={{ padding: "20px 20px" }}>
            <section>
                <div className='pushData'>
                    <Table borderless>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Rate</th>
                                <th>qty</th>
                                <th>Amount</th>
                                <th>Gst</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemArray.map((value,index)=>{
                                console.log("value--------------",value);
                                return(
                            <tr key = {index}>
                                    <td>
                                    <Typeahead
                                        id="basic-typeahead-single-previous-insurer"
                                        onChange={(value)=>handleItemSelectArray(index,value)}
                                        onInputChange={(value)=>handleItemSelectArray(index,value)}
                                        options={ItemOptions}
                                        selected={value.item_name}
                                        placeholder="Select Item"
                                    />
                                </td>
                                <td>
                                    <Input placeholder='Rate' value={value.rate_value} type='number' onChange={(e) => {
                                        amountNewCalculation(e.target.value,value.qty_value,index)
                                    }} />
                                </td>
                                <td>
                                    <Input placeholder='Qty' value={value.qty_value} type='number' onChange={(e) => {
                                        amountNewCalculation(value.rate_value,e.target.value,index)
                                    }} />
                                </td>
                                <td>
                                    <Input placeholder='Amount' value={value.amount_value} type='number' />
                                </td>
                                <td>
                                    <div style={{width:"130px"}}>

                                    <Select value={value.gst_value} options={gstSelect} placeholder="GST" onChange={(e) => {
                                        setGstValue(e)
                                        selectGst(e)
                                        // gstnewTotal(e)
                                    }} />
                                    </div>
                                </td>
                                <td>
                                    <Input placeholder='Total Amount' value={value.total_amount} type='number' />
                                </td>
                                <td>
                                    </td> 
                            </tr>
                                )
                            })}
                            <tr>
                                <td>
                                    <Typeahead
                                        id="basic-typeahead-single-previous-insurer"
                                        onChange={handleItemSelect}
                                        onInputChange={handleItemSelect}
                                        options={ItemOptions}
                                        selected={itemName}
                                        placeholder="Select Item"
                                    />
                                </td>
                                <td>
                                    <Input placeholder='Rate' value={rate} type='number' onChange={(e) => {
                                        setRate(e.target.value)
                                        amountCalculation(e.target.value,quantity)
                                    }} />
                                </td>
                                <td>
                                    <Input placeholder='Qty' value={quantity} type='number' onChange={(e) => {
                                        setQuantity(e.target.value)
                                        amountCalculation(rate,e.target.value)
                                    }} />
                                </td>
                                <td>
                                    <Input placeholder='Amount' value={amount} type='number' />
                                </td>
                                <td>
                                    <div style={{width:"130px"}}>

                                    <Select value={gstValue} options={gstSelect} placeholder="GST" onChange={(e) => {
                                        setGstValue(e)
                                        selectGst(e)
                                        // gstnewTotal(e)
                                    }} />
                                    </div>
                                </td>
                                <td>
                                    <Input placeholder='Total Amount' value={totalAmount} type='number' />
                                </td>
                                <td>
                                    <Button color='primary' onClick={()=>addData()}>Add</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </section>
        </div>
    )
}

export default Billing
