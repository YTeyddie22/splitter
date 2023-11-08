import FriendList from "./Components/FriendList";
import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";
import { useState } from "react";

function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);

	function handleShowAddFriend() {
		setShowAddFriend((show) => !show);
	}
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList />
				{showAddFriend && <FormAddFriend />}
				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? "Close" : "Add Friend"}
				</Button>
			</div>
			<FormSplitBill />
		</div>
	);
}

export default App;
