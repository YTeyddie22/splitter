import Button from "./Button";

export default function Friend({ friend }) {
	return (
		<>
			<li>
				<img src={friend.image} alt={friend.name} />
				<h3>{friend.name}</h3>

				{friend.balance < 0 && (
					<p className="red">
						You owe {friend.name} ${Math.abs(friend.balance)}
					</p>
				)}

				{friend.balance > 0 && (
					<p className="green">
						{friend.name} owes you ${Math.abs(friend.balance)}
					</p>
				)}

				{friend.balance === 0 && (
					<p>You and {friend.name} have equally paid!</p>
				)}
				<Button>Select</Button>
			</li>
		</>
	);
}