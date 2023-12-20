import React,{useState, useEffect} from 'react';

const Test = () => {
    
    // hooks
    const [getSum, setSum] = useState(); // useState is a 'hook'    
    const [getShow, setShow] = useState(false); 
   
    const sumValue = (a, b) => {
        let sum = a + b;
        setSum(sum);
    }
    
    const handleSubmission = (e) => {
        e.preventDefault();
        let a = document.getElementById('a').value;
        let b = document.getElementById('b').value;

        console.log("TEST - handleSubmission()");
        console.log("a & b" );
        console.log(a);
        console.log(b);

        sumValue(parseInt(a), parseInt(b));

    }

    const handleButtonClick = () => {
        if (getShow) {
            setShow(false);
        } else {
            setShow(true);
        }
    }


    return (
        <>
            Something...
            <form onSubmit={handleSubmission}>
                <input id="a" name="a" />
                +
                <input id="b" name="b" /><br />
                <button type='submit'>Submit</button>
            </form>
            <button type="button" onClick={handleButtonClick}>Toggle</button>
            sum of values: { getShow && getSum }
            

        </>
    )
}

export default Test;