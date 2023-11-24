import React from 'react'
import style from './style.module.css';
import SecondBannerImg from '../../images/SecondBannerImg.png';
import textSecondBannerImg from '../../images/textSecondBannerImg.png';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function MainSecondBannerItem() {

    const notify = () =>
        toast.success("Congratulations! You received a discount!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });

    async function fetchAdd(data) {
        const response = await fetch('http://localhost:3333/sale/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const newPost = await response.json();
        console.log(newPost);
    }

    const submit = (event) => {
        event.preventDefault();
        const { number } = event.target;

        const phoneNumberRegex = /^\+49 \d{3} \d{3}-\d{2}-\d{2}$/;
        if (!phoneNumberRegex.test(number.value)) {
            toast.error("Error! Please, enter a valid phone number!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        const newProduct = {
            number: number.value
        }
        event.target.reset();
        console.log(newProduct);
        fetchAdd(newProduct);
        event.target.reset();
        notify();
    };

    return (
        <div>
            <div className={style.discountContainer}>
                <div className={style.gnome}>
                    <img src={SecondBannerImg} alt={SecondBannerImg} />
                </div>
                <div className={style.column}>
                    <img src={textSecondBannerImg} alt={textSecondBannerImg} />
                    <form onSubmit={submit}>
                        <InputMask
                            mask="+49 BAA AAA-AA-AA"
                            maskChar={null}
                            alwaysShowMask={true}
                            formatChars={{ 'A': '[0-9]', 'B': '[0-9]' }}
                        >
                            {(inputProps) => <input {...inputProps} name="number" className={style.phoneInput} />}
                        </InputMask>
                        <p></p>
                        <button className={style.btn}>Get a discount</button>
                    </form>
                </div>
            </div>
            <div className={style.headerContainerOne}>
                <h1 className={style.paragraph}>Sale</h1>
            </div>
        </div>
    )
}