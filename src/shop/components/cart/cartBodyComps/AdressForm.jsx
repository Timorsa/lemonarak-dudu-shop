import React, {useState, useEffect} from 'react';
import gsap from 'gsap'

const AdressForm = ({address, setAddress, setCartMode}) => {

    // personal details
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [secondPhone, setSecondPhone] = useState('');

    // delivery details
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [deliveryNotes, setDeliveryNotes] = useState('');

    const submitAdress = () => {
               setAddress({
             name, 
             email, 
             phone,
             city, 
             adress: street, 
             zipCode,
             houseNumber, 
             secondPhone,
             deliveryNotes
            });

            setCartMode('PAYMENT')

    }

    useEffect(() => {
       gsap.from('.addressForm div', .9, {
           y: 50,
           opacity: 0
       })
    }, [])

    return (
        <>
        <form className='addressForm' dir='rtl' onSubmit={(e) => 
    {    
        e.preventDefault();
        submitAdress();
    
        }}>
            <div className='personal-detail'>
                <h2>פרטים אישיים</h2>
                <input type='text'   value={name}   onChange={(e)=> setName(e.target.value)}   required placeholder='שם מלא*'/>
                <input type='email'  value={email}   onChange={(e)=> setEmail(e.target.value)}   required placeholder='דואר אלקטרוני*'/>
                <input type='tel'   value={phone}   onChange={(e)=> setPhone(e.target.value)}   required minLength='10' maxLength='10' placeholder='מספר ליצירת קשר*'/>
                <input type='tel'   value={secondPhone}   onChange={(e)=> setSecondPhone(e.target.value)}    minLength='10' maxLength='10' placeholder='מספר שני ליצירת קשר'/>

            </div>
             <div className='personal-detail'>
                <h2>פרטים למשלוח</h2>
                <input type='text'   value={city}   onChange={(e)=> setCity(e.target.value)}   required placeholder='עיר*'/>
                <input type='text'   value={street}   onChange={(e)=> setStreet(e.target.value)}   required placeholder='רחוב*'/>
                <input type='text'   value={houseNumber}   onChange={(e)=> setHouseNumber(e.target.value)}  maxLength='3' required placeholder="מס' בית*"/>
                <input type='text'   value={zipCode}   onChange={(e)=> setZipCode(e.target.value)}  maxLength='7' placeholder='מיקוד'/>
                <textarea type='text'  value={deliveryNotes}     onChange={(e)=> setDeliveryNotes(e.target.value)}    placeholder='הערות למשלוח'/>
            </div>
            <h5>שדות המסומנים בכוכבית (*) הינם חובה</h5>

       <button  type='submit' className="proceed-payment-btn" >
                המשך לפרטי תשלום
            </button>        </form>
</>
    )
}

export default AdressForm
