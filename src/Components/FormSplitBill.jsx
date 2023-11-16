import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({ selectedFriend, onSplitBill }) {
	const [bill, setBill] = useState("");
	const [userExpense, setUserExpense] = useState("");
	const friendExpense = bill ? bill - userExpense : "";
	const [payer, setPayer] = useState("user");

	function handleSubmitSplit(e) {
		e.preventDefault();

		if (!bill || !userExpense) return;

		onSplitBill(payer === "user" ? friendExpense : -userExpense);
	}

	return (
		<form className="form-split-bill" onSubmit={handleSubmitSplit}>
			<h2>Split the bill with {selectedFriend.name}</h2>
			<label>💰 Bill Value</label>
			<input
				type="text"
				value={bill}
				onChange={(e) => setBill(Number(e.target.value))}
			/>

			<label>🧑‍🦲Your Expense</label>
			<input
				type="text"
				value={userExpense}
				onChange={(e) =>
					setUserExpense(
						Number(e.target.value) > bill
							? userExpense
							: Number(e.target.value)
					)
				}
			/>

			<label>🧑‍🦰{selectedFriend.name}'s Expense</label>
			<input type="text" disabled value={friendExpense} />

			<label>🤑 Who is paying the bill?</label>
			<select value={payer} onChange={(e) => setPayer(e.target.value)}>
				<option value="user">You</option>
				<option value="friend">{selectedFriend.name}</option>
			</select>

			<Button>Split Bill</Button>
		</form>
	);
}
