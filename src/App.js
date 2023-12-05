import FriendList from "./Components/FriendList";
import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";
import { useState } from "react";
import data from "./Data/data";

function App() {
	const [friend, setFriend] = useState(data);
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [selectedFriend, setSelectedFriend] = useState(null);

	function handleShowAddFriend() {
		setShowAddFriend((show) => !show);
	}

	function handleAddFriend(friend) {
		setFriend((friends) => [...friends, friend]);
		setShowAddFriend(false);
	}

	function handleSelectFriend(friend) {
		setSelectedFriend((curFriend) =>
			curFriend?.id === friend.id ? null : friend
		);
		setShowAddFriend(false);
	}

	function handleSplitBill(value) {
		setFriend((friend) =>
			friend.map((friend) =>
				friend.id === selectedFriend.id
					? { ...friend, balance: friend.balance + value }
					: friend
			)
		);
		setSelectedFriend(null);
	}
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList
					friends={friend}
					onSelectFriend={handleSelectFriend}
					selectedFriend={selectedFriend}
				/>
				{showAddFriend && (
					<FormAddFriend onAddFriend={handleAddFriend} />
				)}
				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? "Close" : "Add Friend"}
				</Button>
			</div>
			{selectedFriend && (
				<FormSplitBill
					selectedFriend={selectedFriend}
					onSplitBill={handleSplitBill}
					key={selectedFriend.id}
				/>
			)}
		</div>
	);
}

export default App;
