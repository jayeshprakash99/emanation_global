import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{ label: "About", path: "/about" },
	{ label: "Services", path: "/services" },
	{ label: "Industries", path: "/industries" },
	{ label: "Insights", path: "/insights" },
	{ label: "Contact", path: "/contact" },
];

const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const location = useLocation();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
			<div className="container-custom flex items-center justify-between h-16 md:h-20">
				<Link to="/" className="flex items-center gap-3">
					<img
						src="/logo.png"
						alt="Emanation Global Logo"
						className="h-10 md:h-12 w-auto"
					/>
					<span className="font-heading font-bold text-lg md:text-xl">
						<span style={{ color: "#518283" }}>Emanation</span>
						<span style={{ color: "#9AA365" }}> Global</span>
					</span>
				</Link>

				<div className="hidden lg:flex items-center gap-1">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
								location.pathname === link.path
									? "bg-gray-100"
									: "text-gray-600 hover:bg-gray-50"
							}`}
							style={
								location.pathname === link.path ? { color: "#518283" } : {}
							}
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="hidden lg:block">
					<Link
						to="/contact"
						className="inline-flex items-center px-5 py-2.5 rounded-lg font-medium text-sm text-white transition-all duration-300 shadow-md hover:shadow-lg hover:opacity-90"
						style={{
							background: "linear-gradient(135deg, #518283, #9AA365)",
						}}
					>
						Get Started
					</Link>
				</div>

				<button
					onClick={() => setMobileOpen(!mobileOpen)}
					className="lg:hidden p-2 text-gray-700 hover:opacity-80 transition-colors"
					style={{ color: "#518283" }}
					aria-label="Toggle menu"
				>
					{mobileOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl"
					>
						<div className="container-custom py-4 flex flex-col gap-1">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									onClick={() => setMobileOpen(false)}
									className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
										location.pathname === link.path
											? "bg-gray-100"
											: "text-gray-600 hover:bg-gray-50"
									}`}
									style={
										location.pathname === link.path ? { color: "#518283" } : {}
									}
								>
									{link.label}
								</Link>
							))}
							<Link
								to="/contact"
								onClick={() => setMobileOpen(false)}
								className="mt-2 px-4 py-3 rounded-lg font-medium text-sm text-white text-center transition-colors hover:opacity-90"
								style={{
									background: "linear-gradient(135deg, #518283, #9AA365)",
								}}
							>
								Get Started
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
