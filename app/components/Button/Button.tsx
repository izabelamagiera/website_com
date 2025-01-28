import React from 'react';
interface ButtonComponentProps {
	Button: ButtonProps;
}

export default function Button({ Button }: ButtonComponentProps) {
	return <div>{Button.title}</div>;
}
