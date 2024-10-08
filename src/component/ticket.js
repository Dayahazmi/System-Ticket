import React from 'react'

function ticket() {
    return (
        <div>
            <div className="my-5 w-full flex justify-center">
                <label className="text-black w-2/4 text-left">
                    Branch :
                    <select className="ml-2 border border-black w-full min-h-10">
                        <option value="Headquaters">Headquaters</option>
                        <option value="Kuantan">Kuantan</option>
                        <option value="Machang">Machang</option>
                        <option value="Kuala Terengganu">Kuala Terengganu</option>
                    </select>
                </label>
            </div>

            <div className="mb-8 w-full flex justify-center">
                <label className="text-black w-2/4 text-left">
                    Department :
                    <select className="ml-2 border border-black w-full min-h-10 ">
                        <option value="Human Resources">Human Resources</option>
                        <option value="Control Center">Control Center</option>
                        <option value="Technician">Technician</option>
                        <option value="Account">Account</option>
                    </select>
                </label>
            </div>

            <div className="mb-8 w-full flex justify-center">
                <textarea className="ml-2 border border-black" rows={2.5} cols={85} placeholder="Subject"></textarea>
            </div>

            <div className="mb-8 w-full flex justify-center">
                <textarea className="ml-2 border border-black" rows={10} cols={85} placeholder="Please type your issue here"></textarea>
            </div>

            <div className="w-full flex justify-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
            </div>
        </div>

    );
}

export default ticket