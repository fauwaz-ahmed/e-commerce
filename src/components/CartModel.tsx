"use client";
import Image from "next/image";

const CartModel = () => {
    const cartItems = true;
    return (
        <div className=" w-max absolute p-4  rounded-md top-12 right-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 ">
            {!cartItems ? (
                <div className="text-center">Your cart is empty</div>
            ) : (
                <div className="flex gap-4">
                    <Image
                        src="/cart2.jpg"
                        alt=""
                        width={72}
                        height={96}
                        className="object-cover rounded-md"
                    />

                    <div className="flex flex-col justify-between w-full ">
                        {/* TOP */}

                        <div className="">
                            {/* TITLE */}
                            <div className=" flex item-center justify-between gap-8">
                                    <h3 className="font-semibold">Product Name</h3>
                                <div className="p-1  bg-gray-50 rounded-sm ">$100</div>
                            </div>
                            
                            {/* {description} */}
                            <div className="text-gray-500 text-sm">available</div>
                        </div>

                        {/* {BOTTOM} */}
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500 text-sm">Qty. 2</span>
                            <span className="text-sm text-blue-500">Remove</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartModel;
