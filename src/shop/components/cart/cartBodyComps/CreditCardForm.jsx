import React, {useState, useEffect} from 'react';
import gsap from 'gsap';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';

// ! disable and opacity less than one until address is filled
const CreditCardForm = ({cartItems, paymentDetails , setCartMode , setPaymentDetails}) => {


    let cartValue = 0 ;

    cartItems.forEach(item => {
        cartValue += item.qty*item.price
    });

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const [ownerId, setOwnderId] = useState('')

    const [mm, setMM] = useState('');
    const [yy, setYY] = useState('');
    const [cvc, setCvc] = useState('');

    const [focusItem, setFocuseItem] = useState('')





    const setPayDetail = () =>{
        setPaymentDetails({
        ownerName: name,
        ownerId,
        cardNumber: number,
        expireDate: {
          mm,
          yy
        },
        cvc,
        });
        setCartMode('CONFORMATION');
    } 

        useEffect(() => {
       gsap.from('.credit-card-form input', .9, {
           y: 50,
           opacity: 0
       })
    }, [])


    return (
       <form dir='rtl' className='credit-card-form' onSubmit={(e) => 
    {    
        e.preventDefault();
      setPayDetail();
    }}        
        >
         <Cards
          cvc={cvc}
          expiry={`${mm+"/"+ yy}`}
          focused={ focusItem}
          name={ name}
          number={ number}
        />
      
          <input
            type="text"
            name="name"
            required
            placeholder="שם בעל הכרטיס"
            value={name}
            onChange={(e) => setName(e.target.value)}
             onFocus={(e) => setFocuseItem(e.target.name)}
          />
          <input
                      required

            type="text"
            name="ownerId"
            placeholder="תעודת זהות בעל הכרטיס"
            value={ownerId}
             minLength='9'
            maxLength='9'
            onChange={(e) => setOwnderId(e.target.value)}
             onFocus={(e) => setFocuseItem(e.target.name)}
          />
        	<input
            type="number"
            name="number"
                        required

            placeholder="מספר כרטיס אשראי"
             minLength='13'
            maxLength='19'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocuseItem(e.target.name)}
          />
         
          <input
            type="text"
            name="cvc"
                        required

            placeholder="CVV"
            value={cvc}
            minLength='3'
            maxLength='4'
            onChange={(e) => setCvc(e.target.value)}
          //  onFocus={(e) => setFocuseItem(e.target.name)}
          />
         	<input
            type="number"
            name="expiry"
            value={mm}
                        required

            minLength='2'
            maxLength='2'
            placeholder="MM"
            
            onChange={(e) => setMM(e.target.value)}
            onFocus={(e) => setFocuseItem(e.target.name)}
          />
        	<input
            type="number"
            name="expiry"
            value={yy}
                        required

            minLength='2'
            maxLength='2'
            placeholder="YY"
            onChange={(e) => setYY(e.target.value)}
            onFocus={(e) => setFocuseItem(e.target.name)}
          />
          <div className='sumup-price'>  סכום כולל מע''מ' : {cartValue} ש''ח</div>
   
           <button  type='submit' className="proceed-payment-btn" >
                המשך לפרטי משלוח
          </button> 
           </form>
    )
}

export default CreditCardForm
