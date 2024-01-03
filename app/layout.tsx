import { inter } from "./ui/fonts";
import "./ui/global.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
};

export default RootLayout;
