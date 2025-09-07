import Logo from "./Logo";
import Navbar from "./Navbar";
import UserMenu from "./UserMenu";
import MobileMenuButton from "./MobileMenuButton";

const Header = () => {
	return (
		<header className="bg-white">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Logo />
					<div className="md:flex md:items-center md:gap-12">
						<Navbar />
						<UserMenu />
						<MobileMenuButton />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
