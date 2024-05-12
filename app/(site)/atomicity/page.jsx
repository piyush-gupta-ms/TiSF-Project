"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
    const [amount1, setAmount1] = useState(5000);
    const [amount2, setAmount2] = useState(3000);
    const [tempAmount1, setTempAmount1] = useState("");
    const [tempAmount2, setTempAmount2] = useState("");
    const [message1, setMessage1] = useState(null);
    const [message2, setMessage2] = useState(null);

    const handleTransaction = (amount, user) => {
        if (user === 1) {
            if (isNaN(parseInt(amount))) {
                setMessage1("Please enter valid amount");
                return;
            }
            if (parseInt(amount)<=0){
                setMessage1("Please enter a valid amount");
                return;
            }
            if (amount1 < amount) {
                setMessage1("Not enough amount");
                return;
            }
            setMessage1("Server Error");
            setAmount1((prev) => parseInt(prev) - parseInt(amount));
            setTimeout(() => {
                setAmount1((prev) => parseInt(prev) + parseInt(amount));
                setMessage1("Amount Refunded");
            }, 5000);
        } else {
            if (isNaN(parseInt(amount))) {
                setMessage2("Please enter valid amount");
                return;
            }
            if (parseInt(amount)<=0){
                setMessage2("Please enter a valid amount");
                return;
            }
            if (amount2 < amount) {
                setMessage2("Not enough amount");
                return;
            }
            setAmount1((prev) => parseInt(prev) + parseInt(amount));
            setAmount2((prev) => parseInt(prev) - parseInt(amount));
            setMessage2(null);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (message1) {
                setMessage1(null);
            }
        }, 5000);

        return () => clearTimeout(timeout);
    }, [message1]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (message2) {
                setMessage2(null);
            }
        }, 5000);
        return () => clearTimeout(timeout);
    }, [message2]);

    return (
        <section className="h-[calc(100vh-100px)] flex flex-col">
            <div className="px-auto w-full py-5 bg-gray-100">
                <h1 className="font-black text-5xl text-center">Atomicity</h1>
                <h5 className="text-center mt-2">
                    All operations in a transaction are completed as a single
                    unit, ensuring either all or none of the operations are
                    executed. <br />
                    Here, all the transactions of User 1 will fail and be rolled-back and all User 2 transactions will be successful.
                </h5>
            </div>
            <div className="flex justify-evenly items-center flex-grow">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col justify-center items-center border-[1px] p-2 rounded-sm min-w-[200px]">
                        <p className="font-semibold text-white bg-orange-500 px-4 w-full text-center">
                            User 1
                        </p>
                        <Image
                            src={"/account2.png"}
                            alt="user1"
                            width={96}
                            height={96}
                        />
                        <p className="font-semibold text-3xl border-[1px] py-2 px-4 rounded-[4px] border-gray-300 bg-green-500 text-white w-full text-center">
                            $ {amount1}
                        </p>
                    </div>
                    <input
                        className="border-2 text-center border-gray-200 focus:border-blue-500 py-2 px-3 rounded-md mt-10"
                        placeholder="Enter Amount to Send"
                        type="text"
                        value={tempAmount1}
                        onChange={(e) => {
                            setTempAmount1(e.target.value);
                        }}
                    />
                    <button
                        className="mt-4 py-2 px-10 rounded-md bg-black text-white font-semibold"
                        onClick={() => {
                            handleTransaction(tempAmount1, 1);
                        }}
                    >
                        Send
                    </button>
                    <p
                        className={`${
                            message1 ? "" : "invisible"
                        } px-4 mt-4 py-2 bg-red-500 text-white`}
                    >
                        {message1 ? message1 : "\u00A0"}
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col justify-center items-center border-[1px] p-2 rounded-sm min-w-[200px]">
                        <p className="font-semibold text-white bg-orange-500 px-4 w-full text-center">
                            User 2
                        </p>
                        <Image
                            src={"/account1.png"}
                            alt="user2"
                            width={96}
                            height={96}
                        />
                        <p className="font-semibold text-3xl border-[1px] py-2 px-4 rounded-[4px] border-gray-300 bg-green-500 text-white w-full text-center">
                            $ {amount2}
                        </p>
                    </div>
                    <input
                        className="border-2 text-center border-gray-200 focus:border-blue-500 py-2 px-3 rounded-md mt-10"
                        placeholder="Enter Amount to Send"
                        type="text"
                        value={tempAmount2}
                        onChange={(e) => {
                            setTempAmount2(e.target.value);
                        }}
                    />
                    <button
                        className="mt-4 py-2 px-10 rounded-md bg-black text-white font-semibold"
                        onClick={() => {
                            handleTransaction(tempAmount2, 2);
                        }}
                    >
                        Send
                    </button>
                    <p
                        className={`${
                            message2 ? "" : "invisible"
                        } px-4 mt-4 py-2 bg-red-500 text-white`}
                    >
                        {message2 ? message2 : "\u00A0"}
                    </p>
                </div>
            </div>
        </section>
    );
}
