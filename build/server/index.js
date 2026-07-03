import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, UNSAFE_withHydrateFallbackProps, isRouteErrorResponse, useParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, ArrowRight, Calendar, Clock, Code, Code2, Database, Download, ExternalLink, FileText, FolderGit2, Globe, Mail, Menu, MessageSquare, Send, Share2, Terminal, User, UserPlus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/components/Navbar.tsx
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const links = [
		{
			to: "/",
			label: "Home",
			icon: Terminal
		},
		{
			to: "/about",
			label: "About",
			icon: User
		},
		{
			to: "/projects",
			label: "Projects",
			icon: Code
		},
		{
			to: "/blogs",
			label: "Blog",
			icon: FileText
		},
		{
			to: "/contact",
			label: "Contact",
			icon: Mail
		}
	];
	return /* @__PURE__ */ jsxs("nav", {
		className: "fixed w-full z-50 top-0 border-b border-[#E5E0D0] bg-[#F6F4EB]/90 backdrop-blur-md shadow-sm font-sans",
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex justify-between items-center h-16",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "flex items-center space-x-2 text-[#0F172A] group",
						children: /* @__PURE__ */ jsxs("span", {
							className: "font-serif font-bold text-xl tracking-tight text-[#0F172A]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "italic text-[#EA580C]",
								children: "Jayanthan"
							}), /* @__PURE__ */ jsx("span", { children: " Senthilkumar" })]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden md:flex space-x-8",
						children: links.map(({ to, label, icon: Icon }) => /* @__PURE__ */ jsxs(NavLink, {
							to,
							className: ({ isActive }) => `flex items-center space-x-1 text-sm font-medium transition-colors ${isActive ? "text-[#EA580C]" : "text-slate-600 hover:text-[#0F172A]"}`,
							children: [/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: label })]
						}, to))
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => setIsOpen(!isOpen),
						className: "md:hidden text-slate-600 hover:text-[#0F172A]",
						children: isOpen ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
					})
				]
			})
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -10
			},
			className: "md:hidden bg-[#F6F4EB] border-b border-[#E5E0D0] shadow-md",
			children: /* @__PURE__ */ jsx("div", {
				className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
				children: links.map(({ to, label, icon: Icon }) => /* @__PURE__ */ jsxs(NavLink, {
					to,
					onClick: () => setIsOpen(false),
					className: ({ isActive }) => `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-orange-50 text-[#EA580C]" : "text-slate-600 hover:bg-[#E5E0D0] hover:text-[#0F172A]"}`,
					children: [/* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }), /* @__PURE__ */ jsx("span", { children: label })]
				}, to))
			})
		}) })]
	});
}
//#endregion
//#region app/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "w-full",
		children: [/* @__PURE__ */ jsx("div", {
			className: "bg-[#F6F4EB] pt-16 md:pt-24 pb-2 md:pb-3 px-4 sm:px-6 lg:px-8 text-center border-t border-[#E5E0D0]",
			children: /* @__PURE__ */ jsxs("h2", {
				className: "font-serif font-normal text-[#0F172A] text-[7vw] md:text-[7.5vw] leading-none tracking-tight whitespace-nowrap flex items-center justify-center w-full",
				children: ["Jayanthan from ", /* @__PURE__ */ jsx("span", {
					className: "italic text-[#EA580C] ml-2 md:ml-4",
					children: "Australia"
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "bg-[#0F172A] text-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-1 md:col-span-4 lg:col-span-4",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/",
								className: "inline-flex flex-col space-y-2 mb-6 group",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-serif font-medium text-xs tracking-[0.2em] text-[#EA580C] uppercase",
									children: "November 18, 2004"
								}), /* @__PURE__ */ jsxs("span", {
									className: "font-serif font-bold text-4xl tracking-tight text-white group-hover:text-slate-200 transition-colors",
									children: [
										"Jayanthan",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "text-[#EA580C] italic",
											children: "Senthilkumar"
										})
									]
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-slate-400 font-sans font-light leading-relaxed max-w-sm",
								children: "A data-driven portfolio highlighting real-world engineering, predictive models, and AI-driven transformation by a passionate builder."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-1 md:col-span-2 lg:col-span-2",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-slate-300 font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6",
								children: "Explore"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "space-y-4 font-sans font-light text-slate-400",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
										to: "/about",
										className: "hover:text-white transition-colors",
										children: "About"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
										to: "/projects",
										className: "hover:text-white transition-colors",
										children: "Projects"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
										to: "/blogs",
										className: "hover:text-white transition-colors",
										children: "Blogs"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-1 md:col-span-2 lg:col-span-2",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-slate-300 font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6",
								children: "Get Involved"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "space-y-4 font-sans font-light text-slate-400",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
										to: "/contact",
										className: "hover:text-white transition-colors",
										children: "Contact"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "https://github.com/jayanthansenthilkumar",
										target: "_blank",
										rel: "noreferrer",
										className: "hover:text-white transition-colors",
										children: "Collaborate"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "https://www.linkedin.com/in/jayanthan18",
										target: "_blank",
										rel: "noreferrer",
										className: "hover:text-white transition-colors",
										children: "Network"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-1 md:col-span-2 lg:col-span-2",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-slate-300 font-sans font-bold text-xs uppercase tracking-[0.2em] mb-6",
								children: "Resources"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "space-y-4 font-sans font-light text-slate-400",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
										to: "/resume",
										className: "hover:text-white transition-colors",
										children: "Resume"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
										to: "/projects",
										className: "hover:text-white transition-colors",
										children: "Case Studies"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "#",
										className: "hover:text-white transition-colors",
										children: "FAQ"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-1 md:col-span-12 lg:col-span-2 flex flex-col items-start lg:items-end lg:text-right",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-slate-400 font-sans font-light mb-6",
									children: "Get project drops, updates, and public launch notes in your inbox."
								}),
								/* @__PURE__ */ jsxs("button", {
									className: "w-full lg:w-auto px-6 py-3 bg-[#FAF7F2] text-[#0F172A] font-sans font-bold text-sm tracking-widest uppercase rounded flex items-center justify-center space-x-2 hover:bg-white transition-colors mb-8",
									children: [/* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-[#EA580C]" }), /* @__PURE__ */ jsx("span", { children: "Connect" })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex space-x-3 justify-start lg:justify-end w-full lg:w-auto",
									children: [
										/* @__PURE__ */ jsx("a", {
											href: "https://github.com/jayanthansenthilkumar",
											className: "w-10 h-10 bg-[#FAF7F2] rounded flex items-center justify-center text-[#0F172A] hover:bg-white hover:-translate-y-1 transition-all",
											children: /* @__PURE__ */ jsx(Code2, { className: "w-5 h-5" })
										}),
										/* @__PURE__ */ jsx("a", {
											href: "https://www.linkedin.com/in/jayanthan18",
											className: "w-10 h-10 bg-[#FAF7F2] rounded flex items-center justify-center text-[#0F172A] hover:bg-white hover:-translate-y-1 transition-all",
											children: /* @__PURE__ */ jsx(UserPlus, { className: "w-5 h-5" })
										}),
										/* @__PURE__ */ jsx("a", {
											href: "mailto:jayanthansenthilkumar18@gmail.com",
											className: "w-10 h-10 bg-[#FAF7F2] rounded flex items-center justify-center text-[#0F172A] hover:bg-white hover:-translate-y-1 transition-all",
											children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" })
										})
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans font-medium tracking-wider text-slate-500 uppercase",
					children: [/* @__PURE__ */ jsxs("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Jayanthan Senthilkumar."
					] }), /* @__PURE__ */ jsx("p", {
						className: "mt-4 md:mt-0 font-bold text-white tracking-[0.2em]",
						children: "#JayanthanSenthilkumar"
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	HydrateFallback: () => HydrateFallback,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", {
			className: "bg-[#F6F4EB] bg-grid-pattern text-slate-800 antialiased min-h-screen flex flex-col selection:bg-orange-200 selection:text-orange-900",
			children: [
				/* @__PURE__ */ jsx(Navbar, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-grow pt-16",
					children
				}),
				/* @__PURE__ */ jsx(Footer, {}),
				/* @__PURE__ */ jsx(ScrollRestoration, {}),
				/* @__PURE__ */ jsx(Scripts, {})
			]
		})]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var HydrateFallback = UNSAFE_withHydrateFallbackProps(function HydrateFallback() {
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-40 flex items-center justify-center bg-[#F6F4EB]",
		children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EA580C]" })
	});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta$6
});
function meta$6({}) {
	return [{ title: "Jayanthan Senthilkumar | AI & ML Engineer" }, {
		name: "description",
		content: "Portfolio of Jayanthan Senthilkumar - AI & ML Engineer."
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	const featuredProjects = [{
		title: "PLANGO - AI Trip Planner",
		description: "A scalable AI-based trip optimizer with real-time traffic data, boosting route accuracy and reducing latency.",
		tags: [
			"Flask",
			"Python-ML",
			"SQLite",
			"JS"
		],
		status: "Production"
	}, {
		title: "Cargo Fleet Management System",
		description: "IoT fleet system integrating ML load prediction and distributed data pipelines, improving utilization by 55%.",
		tags: [
			"Laravel",
			"IoT",
			"Python-ML",
			"Arduino"
		],
		status: "Production"
	}];
	const [recentPosts, setRecentPosts] = useState([]);
	const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);
	useEffect(() => {
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@jayanthansenthilkumar?t=${Date.now()}`)}`).then((res) => res.json()).then((data) => {
			if (data.items) setRecentPosts(data.items.slice(0, 2));
			setIsLoadingBlogs(false);
		}).catch((err) => {
			console.error("Failed to fetch Medium articles", err);
			setIsLoadingBlogs(false);
		});
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col bg-[#F6F4EB]",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative w-full border-b border-[#E5E0D0]",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 z-0 opacity-30 pointer-events-none",
					style: {
						backgroundImage: "linear-gradient(#E5E0D0 1px, transparent 1px), linear-gradient(90deg, #E5E0D0 1px, transparent 1px)",
						backgroundSize: "40px 40px"
					}
				}), /* @__PURE__ */ jsx("section", {
					className: "relative z-10 pt-16 pb-20 md:pt-28 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full",
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							ease: "easeOut"
						},
						className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "uppercase tracking-[0.2em] text-[#EA580C] font-bold text-xs md:text-sm mb-6 font-sans flex items-center space-x-2",
								children: [/* @__PURE__ */ jsx("span", { className: "w-4 h-[2px] bg-[#EA580C]" }), /* @__PURE__ */ jsx("span", { children: "AI & ML Engineer" })]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "text-6xl md:text-7xl lg:text-[6rem] font-serif text-[#0F172A] leading-[1.05] tracking-tight mb-8",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "italic text-[#EA580C]",
										children: "Jayanthan"
									}),
									/* @__PURE__ */ jsx("br", {}),
									"Senthilkumar"
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-lg md:text-xl text-slate-600 leading-relaxed font-sans font-light max-w-lg mb-10",
								children: [
									"Incoming Master's student in AI & ML at ",
									/* @__PURE__ */ jsx("span", {
										className: "font-medium text-[#0F172A]",
										children: "Adelaide University, Australia"
									}),
									". B.Tech graduate in Artificial Intelligence and Machine Learning."
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-4",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "#projects",
									className: "px-7 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium transition-all shadow-md hover:shadow-lg text-base flex items-center space-x-2",
									children: [/* @__PURE__ */ jsx("span", { children: "View Projects" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-1" })]
								}), /* @__PURE__ */ jsx("a", {
									href: "#contact",
									className: "px-7 py-3.5 rounded-full bg-transparent border border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white font-medium transition-all text-base flex items-center space-x-2",
									children: /* @__PURE__ */ jsx("span", { children: "Contact Me" })
								})]
							})
						] }), /* @__PURE__ */ jsx("div", {
							className: "flex flex-col lg:pl-12 lg:border-l border-[#E5E0D0] justify-center pt-8 lg:pt-0",
							children: /* @__PURE__ */ jsxs("div", {
								className: "bg-transparent p-4 md:p-6 relative overflow-visible group flex items-center justify-center min-h-[400px]",
								children: [/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EA580C]/10 blur-[80px] rounded-full transition-colors duration-700 pointer-events-none" }), /* @__PURE__ */ jsx("div", {
									className: "relative z-10 flex-1 flex items-center justify-center w-full",
									children: /* @__PURE__ */ jsxs("svg", {
										viewBox: "0 0 380 380",
										className: "w-full max-w-[380px] h-auto overflow-visible",
										children: [
											[
												{
													name: "Machine Learning",
													value: 95
												},
												{
													name: "Deep Learning",
													value: 90
												},
												{
													name: "Generative AI",
													value: 85
												},
												{
													name: "NLP",
													value: 85
												},
												{
													name: "Computer Vision",
													value: 80
												},
												{
													name: "AI Agents",
													value: 75
												}
											].map((skill, i) => {
												const centerX = 190;
												const centerY = 190;
												const INNER_RADIUS = 40;
												const NUM_BANDS = 10;
												const BAND_WIDTH = 6;
												const angleStart = (i * 60 - 90 + 6) * (Math.PI / 180);
												const angleEnd = (i * 60 - 90 + 54) * (Math.PI / 180);
												const midAngle = (i * 60 - 90 + 30) * (Math.PI / 180);
												const labelRadius = 155;
												const textX = centerX + labelRadius * Math.cos(midAngle);
												const textY = centerY + labelRadius * Math.sin(midAngle);
												const anchor = Math.cos(midAngle) > .1 ? "start" : Math.cos(midAngle) < -.1 ? "end" : "middle";
												const baseline = Math.sin(midAngle) > .1 ? "hanging" : Math.sin(midAngle) < -.1 ? "bottom" : "middle";
												return /* @__PURE__ */ jsxs("g", { children: [Array.from({ length: NUM_BANDS }).map((_, j) => {
													const r = INNER_RADIUS + j * 10;
													const x1 = centerX + r * Math.cos(angleStart);
													const y1 = centerY + r * Math.sin(angleStart);
													const x2 = centerX + r * Math.cos(angleEnd);
													const y2 = centerY + r * Math.sin(angleEnd);
													const isActive = j * 10 < skill.value;
													const isGlow = j * 10 >= skill.value - 10 && j * 10 < skill.value;
													return /* @__PURE__ */ jsx(motion.path, {
														initial: {
															opacity: 0,
															pathLength: 0
														},
														animate: {
															opacity: 1,
															pathLength: 1
														},
														transition: {
															duration: .5,
															delay: .1 * j + .1 * i,
															ease: "easeOut"
														},
														d: `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`,
														fill: "none",
														stroke: isActive ? "#EA580C" : "#E2E8F0",
														strokeWidth: BAND_WIDTH,
														strokeLinecap: "round",
														className: isGlow ? "drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]" : ""
													}, j);
												}), /* @__PURE__ */ jsxs(motion.text, {
													initial: {
														opacity: 0,
														filter: "blur(4px)"
													},
													animate: {
														opacity: 1,
														filter: "blur(0px)"
													},
													transition: {
														duration: .8,
														delay: 1.2 + i * .1
													},
													x: textX,
													y: textY,
													fill: "#475569",
													fontSize: "11",
													fontFamily: "monospace",
													fontWeight: "600",
													letterSpacing: "0.05em",
													textAnchor: anchor,
													dominantBaseline: baseline,
													children: [/* @__PURE__ */ jsx("tspan", {
														x: textX,
														dy: "0",
														children: skill.name
													}), /* @__PURE__ */ jsxs("tspan", {
														x: textX,
														dy: "14",
														fill: "#EA580C",
														fontWeight: "bold",
														children: [skill.value, "%"]
													})]
												})] }, skill.name);
											}),
											/* @__PURE__ */ jsx(motion.circle, {
												cx: 190,
												cy: 190,
												r: 15,
												fill: "#EA580C",
												className: "drop-shadow-[0_0_15px_rgba(234,88,12,0.6)]",
												animate: {
													scale: [
														1,
														1.3,
														1
													],
													opacity: [
														.7,
														1,
														.7
													]
												},
												transition: {
													repeat: Infinity,
													duration: 2,
													ease: "easeInOut"
												}
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: 190,
												cy: 190,
												r: 6,
												fill: "#F6F4EB"
											})
										]
									})
								})]
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "about",
				className: "py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#E5E0D0] mt-0",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row gap-16 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center space-x-3 text-[#EA580C] mb-6",
								children: [/* @__PURE__ */ jsx(User, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
									className: "font-serif italic text-xl tracking-tight",
									children: "/about-me"
								})]
							}),
							/* @__PURE__ */ jsxs("h3", {
								className: "text-4xl md:text-5xl font-serif text-[#0F172A] mb-8 leading-tight",
								children: ["Product-focused ", /* @__PURE__ */ jsx("span", {
									className: "italic text-[#EA580C]",
									children: "Software Engineer"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-slate-600 font-sans font-light leading-relaxed mb-6",
								children: "Crafting data-driven experiences grounded in proven engineering traditions. Skilled in distributed systems and full-stack development, I blend analytical focus with creative problem-solving to build scalable, client-centric applications aligned with AI-driven transformation goals."
							}),
							/* @__PURE__ */ jsxs(Link, {
								to: "/about",
								className: "inline-flex items-center space-x-2 text-[#0F172A] font-semibold hover:text-[#EA580C] transition-colors border-b border-[#0F172A] hover:border-[#EA580C] pb-1",
								children: [/* @__PURE__ */ jsx("span", { children: "Read Full Biography" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex-1 grid grid-cols-2 gap-6 w-full",
						children: [
							"Python & PHP",
							"HTML/CSS/JS",
							"Laravel & MySQL",
							"Machine Learning"
						].map((skill) => /* @__PURE__ */ jsx("div", {
							className: "bg-[#FAF7F2] border border-[#E5E0D0] p-6 rounded-2xl text-center shadow-sm flex items-center justify-center",
							children: /* @__PURE__ */ jsx("span", {
								className: "font-serif text-[#0F172A] text-xl",
								children: skill
							})
						}, skill))
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "projects",
				className: "py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#E5E0D0]",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex justify-between items-end mb-16",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center space-x-3 text-[#EA580C] mb-4",
							children: [/* @__PURE__ */ jsx(FolderGit2, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
								className: "font-serif italic text-xl tracking-tight",
								children: "/projects"
							})]
						}), /* @__PURE__ */ jsxs("h3", {
							className: "text-4xl md:text-5xl font-serif text-[#0F172A]",
							children: ["Featured ", /* @__PURE__ */ jsx("span", {
								className: "italic text-[#EA580C]",
								children: "Work"
							})]
						})] }), /* @__PURE__ */ jsxs(Link, {
							to: "/projects",
							className: "hidden md:inline-flex items-center space-x-2 text-[#0F172A] font-semibold hover:text-[#EA580C] transition-colors border-b border-[#0F172A] hover:border-[#EA580C] pb-1",
							children: [/* @__PURE__ */ jsx("span", { children: "View All Projects" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-12",
						children: featuredProjects.map((project) => /* @__PURE__ */ jsxs("div", {
							className: "group relative bg-[#FAF7F2] border border-[#E5E0D0] rounded-2xl p-10 hover:border-[#EA580C]/50 hover:shadow-xl transition-all flex flex-col shadow-sm",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex justify-between items-start mb-8",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "px-3 py-1 rounded-full bg-white text-slate-600 font-sans text-xs border border-[#E5E0D0] shadow-sm uppercase tracking-wider",
										children: ["Status: ", /* @__PURE__ */ jsx("span", {
											className: project.status === "Production" ? "text-[#0F172A] font-semibold" : "text-[#EA580C] font-semibold",
											children: project.status
										})]
									}), /* @__PURE__ */ jsx(Code2, { className: "w-5 h-5 text-slate-400 group-hover:text-[#EA580C] transition-colors" })]
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "text-3xl font-serif text-[#0F172A] mb-4 group-hover:text-[#EA580C] transition-colors",
									children: project.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-slate-600 mb-10 flex-grow leading-relaxed font-light text-lg",
									children: project.description
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-3 mt-auto",
									children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", {
										className: "text-sm font-sans font-medium text-slate-600 bg-white px-3 py-1 rounded-md border border-[#E5E0D0]",
										children: tag
									}, tag))
								})
							]
						}, project.title))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 text-center md:hidden",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/projects",
							className: "inline-flex items-center space-x-2 text-[#0F172A] font-semibold hover:text-[#EA580C] transition-colors border-b border-[#0F172A] hover:border-[#EA580C] pb-1",
							children: [/* @__PURE__ */ jsx("span", { children: "View All Projects" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "blog",
				className: "py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#E5E0D0]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex justify-between items-end mb-16",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-3 text-[#EA580C] mb-4",
						children: [/* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
							className: "font-serif italic text-xl tracking-tight",
							children: "/blog"
						})]
					}), /* @__PURE__ */ jsxs("h3", {
						className: "text-4xl md:text-5xl font-serif text-[#0F172A]",
						children: ["Latest ", /* @__PURE__ */ jsx("span", {
							className: "italic text-[#EA580C]",
							children: "Writings"
						})]
					})] }), /* @__PURE__ */ jsxs(Link, {
						to: "/blogs",
						className: "hidden md:inline-flex items-center space-x-2 text-[#0F172A] font-semibold hover:text-[#EA580C] transition-colors border-b border-[#0F172A] hover:border-[#EA580C] pb-1",
						children: [/* @__PURE__ */ jsx("span", { children: "Read All Articles" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
					})]
				}), /* @__PURE__ */ jsx("div", { children: isLoadingBlogs ? /* @__PURE__ */ jsxs("div", {
					className: "text-center py-10",
					children: [/* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#EA580C] mx-auto" }), /* @__PURE__ */ jsx("p", {
						className: "mt-4 text-slate-500 font-sans text-sm",
						children: "Loading recent articles..."
					})]
				}) : recentPosts.length === 0 ? /* @__PURE__ */ jsx("div", {
					className: "text-center py-10 text-slate-500 font-sans",
					children: "No recent articles found."
				}) : /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
					children: recentPosts.map((post, index) => /* @__PURE__ */ jsxs("article", {
						className: "flex flex-col md:flex-row bg-[#FAF7F2] border border-[#E5E0D0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative h-full",
						children: [/* @__PURE__ */ jsx("div", {
							className: "md:w-[40%] min-h-[200px] md:min-h-full bg-[#E5E0D0] relative border-b md:border-b-0 md:border-r border-[#E5E0D0] flex flex-col justify-center items-center overflow-hidden shrink-0",
							children: post.thumbnail ? /* @__PURE__ */ jsx("img", {
								src: post.thumbnail,
								alt: post.title,
								className: "absolute inset-0 w-full h-full object-cover"
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-200 to-[#E5E0D0] opacity-50" }), /* @__PURE__ */ jsxs("div", {
								className: "relative z-10 text-center",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-serif text-2xl md:text-3xl text-[#0F172A] leading-none mb-1",
									children: "Jayanthan"
								}), /* @__PURE__ */ jsx("p", {
									className: "font-serif italic text-xl text-[#EA580C]",
									children: "Insights"
								})]
							})] })
						}), /* @__PURE__ */ jsxs("div", {
							className: "md:w-[60%] p-5 md:p-6 flex flex-col justify-between flex-1",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-[#EA580C] font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3 flex items-center",
									children: /* @__PURE__ */ jsx("span", { children: new Date(post.pubDate.replace(/-/g, "/")).toLocaleDateString("en-US", {
										year: "numeric",
										month: "short",
										day: "numeric"
									}) })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-serif text-[#0F172A] mb-2 group-hover:text-[#EA580C] transition-colors leading-tight",
									children: /* @__PURE__ */ jsx(Link, {
										to: `/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
										className: "before:absolute before:inset-0",
										children: post.title
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center space-x-2 text-slate-500 text-sm mb-3",
									children: [/* @__PURE__ */ jsx(User, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: post.author || "Jayanthan Senthilkumar" })]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-slate-600 font-sans font-light leading-relaxed mb-4 text-sm line-clamp-3",
									children: post.description.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ")
								})
							] }), /* @__PURE__ */ jsxs("div", {
								className: "flex justify-between items-center border-t border-[#E5E0D0] pt-4 mt-2 relative z-20",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-2",
									children: post.categories && post.categories.slice(0, 2).map((category) => /* @__PURE__ */ jsx("span", {
										className: "px-3 py-1 bg-white border border-[#E5E0D0] text-slate-500 rounded-full text-[10px] font-medium uppercase tracking-wider",
										children: category
									}, category))
								}), /* @__PURE__ */ jsxs(Link, {
									to: `/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
									className: "flex items-center space-x-1 text-[#EA580C] hover:text-[#C2410C] text-[10px] font-bold tracking-[0.1em] uppercase transition-colors shrink-0 ml-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "hidden sm:inline",
										children: "Read Article"
									}), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3 md:w-4 md:h-4" })]
								})]
							})]
						})]
					}, post.guid || index))
				}) })]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "contact",
				className: "py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-t border-[#E5E0D0] text-center",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center space-x-3 text-[#EA580C] mb-6 justify-center",
						children: [/* @__PURE__ */ jsx(Mail, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
							className: "font-serif italic text-xl tracking-tight",
							children: "/contact"
						})]
					}),
					/* @__PURE__ */ jsxs("h3", {
						className: "text-4xl md:text-5xl font-serif text-[#0F172A] mb-8 leading-tight",
						children: ["Ready to ", /* @__PURE__ */ jsx("span", {
							className: "italic text-[#EA580C]",
							children: "Collaborate?"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xl text-slate-600 max-w-2xl mx-auto font-sans font-light mb-12",
						children: "I'm currently accepting new projects and open to discussing full-time opportunities. Drop a message and let's build something extraordinary."
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						className: "inline-flex px-10 py-5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium transition-all shadow-lg hover:shadow-xl text-lg items-center space-x-3 mx-auto",
						children: [/* @__PURE__ */ jsx(Send, { className: "w-5 h-5" }), /* @__PURE__ */ jsx("span", { children: "Get in Touch" })]
					})
				]
			})
		]
	});
});
//#endregion
//#region app/routes/about.tsx
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => about_default,
	meta: () => meta$5
});
function meta$5({}) {
	return [{ title: "Jayanthan Senthilkumar | About" }, {
		name: "description",
		content: "About me and my tech stack."
	}];
}
var about_default = UNSAFE_withComponentProps(function About() {
	const skills = [
		{
			name: "Languages",
			icon: Globe,
			items: [
				"Python",
				"Golang",
				"HTML",
				"CSS",
				"JavaScript",
				"PHP"
			]
		},
		{
			name: "Frameworks",
			icon: Code,
			items: [
				"Laravel",
				"jQuery",
				"Ajax",
				"React"
			]
		},
		{
			name: "Tools",
			icon: Database,
			items: [
				"GitHub",
				"Git",
				"Docker",
				"Kubernetes",
				"MySQL",
				"SAP ABAP HANA"
			]
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "mb-16 text-center max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center space-x-3 text-[#EA580C] mb-6",
						children: [/* @__PURE__ */ jsx(User, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
							className: "font-serif italic text-xl tracking-tight",
							children: "/about-me"
						})]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-4xl md:text-6xl font-serif text-[#0F172A] mb-8 leading-tight",
						children: ["Product-focused ", /* @__PURE__ */ jsx("span", {
							className: "italic text-[#EA580C]",
							children: "Software Engineer"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "prose prose-lg mx-auto text-slate-600 font-sans font-light text-left md:text-center",
						children: /* @__PURE__ */ jsx("p", { children: "Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions. Skilled in distributed systems and full-stack development, I blend analytical focus with creative problem-solving to build scalable, client-centric applications aligned with AI-driven transformation goals." })
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-24 max-w-6xl mx-auto mb-20",
				children: [/* @__PURE__ */ jsxs("h3", {
					className: "text-4xl font-serif text-[#0F172A] mb-12 text-center",
					children: ["Academic ", /* @__PURE__ */ jsx("span", {
						className: "italic text-[#EA580C]",
						children: "Roadmap"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mt-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "md:hidden space-y-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "relative flex items-center justify-between group is-active",
								children: [/* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded-full border-4 border-[#E5E0D0] bg-[#FAF7F2] shrink-0 shadow z-10" }), /* @__PURE__ */ jsxs("div", {
									className: "w-[calc(100%-3rem)] p-4 rounded-xl border border-[#E5E0D0] bg-white shadow-sm",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: "/cheran.jpeg",
											alt: "SSLC School",
											className: "w-full aspect-[4/3] object-cover rounded-lg mb-4 bg-slate-100",
											onError: (e) => {
												e.currentTarget.style.display = "none";
											}
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between space-x-2 mb-1",
											children: [/* @__PURE__ */ jsx("div", {
												className: "font-serif font-bold text-[#0F172A]",
												children: "SSLC"
											}), /* @__PURE__ */ jsx("span", {
												className: "text-xs font-sans font-medium text-slate-400 uppercase",
												children: "2019 - 2020"
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-slate-500 text-sm",
											children: "Cheran Matriculation Higher Secondary School"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-slate-500 font-sans mt-1 text-xs font-medium",
											children: "Percentage : 76.2"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative flex items-center justify-between group is-active",
								children: [/* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded-full border-4 border-[#E5E0D0] bg-[#FAF7F2] shrink-0 shadow z-10" }), /* @__PURE__ */ jsxs("div", {
									className: "w-[calc(100%-3rem)] p-4 rounded-xl border border-[#E5E0D0] bg-white shadow-sm",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: "/cheran.jpeg",
											alt: "HSC School",
											className: "w-full aspect-[4/3] object-cover rounded-lg mb-4 bg-slate-100",
											onError: (e) => {
												e.currentTarget.style.display = "none";
											}
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between space-x-2 mb-1",
											children: [/* @__PURE__ */ jsx("div", {
												className: "font-serif font-bold text-[#0F172A]",
												children: "HSC"
											}), /* @__PURE__ */ jsx("span", {
												className: "text-xs font-sans font-medium text-slate-400 uppercase",
												children: "2021 - 2022"
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-slate-500 text-sm",
											children: "Cheran Matriculation Higher Secondary School"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-slate-500 font-sans mt-1 text-xs font-medium",
											children: "Percentage : 89.5"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative flex items-center justify-between group is-active",
								children: [/* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-[#0F172A] shrink-0 shadow z-10" }), /* @__PURE__ */ jsxs("div", {
									className: "w-[calc(100%-3rem)] p-4 rounded-xl border border-[#E5E0D0] bg-white shadow-sm",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: "/mkce.jpg",
											alt: "MKCE",
											className: "w-full aspect-[4/3] object-cover rounded-lg mb-4 bg-slate-100",
											onError: (e) => {
												e.currentTarget.style.display = "none";
											}
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between space-x-2 mb-1",
											children: [/* @__PURE__ */ jsx("div", {
												className: "font-serif font-bold text-[#0F172A]",
												children: "B.Tech AI & ML"
											}), /* @__PURE__ */ jsx("span", {
												className: "text-xs font-sans font-medium text-slate-400 uppercase",
												children: "2022 - 2026"
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-slate-500 text-sm",
											children: "M. Kumarasamy College of Engineering"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-slate-500 font-sans mt-1 text-xs font-medium",
											children: "CGPA: 8.12"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative flex items-center justify-between group is-active",
								children: [/* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-[#EA580C] shrink-0 shadow z-10" }), /* @__PURE__ */ jsxs("div", {
									className: "w-[calc(100%-3rem)] p-4 rounded-xl border border-[#E5E0D0] bg-white shadow-sm",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: "/adelaide.jpg",
											alt: "Adelaide University",
											className: "w-full aspect-[4/3] object-cover rounded-lg mb-4 bg-slate-100",
											onError: (e) => {
												e.currentTarget.style.display = "none";
											}
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between space-x-2 mb-1",
											children: [/* @__PURE__ */ jsx("div", {
												className: "font-serif font-bold text-[#0F172A]",
												children: "Master's AI & ML"
											}), /* @__PURE__ */ jsx("span", {
												className: "text-xs font-sans font-bold text-white bg-[#EA580C] px-2 py-0.5 rounded uppercase shadow-sm",
												children: "Present"
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-slate-500 text-sm",
											children: "Adelaide University, Australia"
										})
									]
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "hidden md:block relative w-full mt-8 mb-12",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-4 gap-4 w-full items-end pb-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-center text-center px-2",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: "/cheran.jpeg",
												alt: "SSLC School",
												className: "w-full aspect-[4/3] object-cover rounded-xl border border-[#E5E0D0] shadow-sm mb-4 bg-slate-100",
												onError: (e) => {
													e.currentTarget.style.display = "none";
												}
											}),
											/* @__PURE__ */ jsx("h4", {
												className: "text-xl font-serif text-[#0F172A]",
												children: "SSLC"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-slate-500 font-sans mt-1 text-sm",
												children: "Cheran Matriculation Higher Secondary School"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-slate-500 font-sans mt-1 text-[11px] font-bold tracking-widest uppercase",
												children: "Percentage : 76.2"
											})
										]
									}),
									/* @__PURE__ */ jsx("div", {}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-center text-center px-2",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: "/mkce.jpg",
												alt: "MKCE",
												className: "w-full aspect-[4/3] object-cover rounded-xl border border-[#E5E0D0] shadow-sm mb-4 bg-slate-100",
												onError: (e) => {
													e.currentTarget.style.display = "none";
												}
											}),
											/* @__PURE__ */ jsx("h4", {
												className: "text-xl font-serif text-[#0F172A]",
												children: "B.Tech AI & ML"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-slate-500 font-sans mt-1 text-xs",
												children: "M. Kumarasamy College of Engineering"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-slate-500 font-sans mt-1 text-[11px] font-bold tracking-widest uppercase",
												children: "CGPA: 8.12"
											})
										]
									}),
									/* @__PURE__ */ jsx("div", {})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative w-full h-[120px]",
								children: [/* @__PURE__ */ jsx("svg", {
									className: "absolute w-full h-full left-0 top-0 pointer-events-none z-0",
									viewBox: "0 0 1000 120",
									preserveAspectRatio: "none",
									children: /* @__PURE__ */ jsx("path", {
										d: "M 0 30 L 125 30 C 225 30, 275 90, 375 90 C 475 90, 525 30, 625 30 C 725 30, 775 90, 875 90 L 1000 90",
										fill: "none",
										stroke: "#E5E0D0",
										strokeWidth: "4",
										vectorEffect: "non-scaling-stroke"
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-4 gap-4 relative z-10 w-full h-full",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "relative w-full h-full",
											children: /* @__PURE__ */ jsx("div", { className: "absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FAF7F2] border-4 border-[#E5E0D0] hover:border-[#EA580C] transition-colors shadow-sm" })
										}),
										/* @__PURE__ */ jsx("div", {
											className: "relative w-full h-full",
											children: /* @__PURE__ */ jsx("div", { className: "absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FAF7F2] border-4 border-[#E5E0D0] hover:border-[#EA580C] transition-colors shadow-sm" })
										}),
										/* @__PURE__ */ jsx("div", {
											className: "relative w-full h-full",
											children: /* @__PURE__ */ jsx("div", { className: "absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0F172A] border-4 border-white shadow-md hover:bg-[#EA580C] transition-colors" })
										}),
										/* @__PURE__ */ jsx("div", {
											className: "relative w-full h-full",
											children: /* @__PURE__ */ jsx("div", {
												className: "absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#EA580C] border-4 border-white shadow-md",
												children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full animate-ping opacity-30 bg-[#EA580C]" })
											})
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-4 gap-4 w-full items-start pt-2",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex flex-col items-center",
										children: /* @__PURE__ */ jsx("span", {
											className: "text-xs font-sans font-medium text-slate-400 uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-[#E5E0D0] shadow-sm",
											children: "2019 - 2020"
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-center text-center px-2",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: "/cheran.jpeg",
												alt: "HSC School",
												className: "w-full aspect-[4/3] object-cover rounded-xl border border-[#E5E0D0] shadow-sm mb-4 bg-slate-100",
												onError: (e) => {
													e.currentTarget.style.display = "none";
												}
											}),
											/* @__PURE__ */ jsx("h4", {
												className: "text-xl font-serif text-[#0F172A]",
												children: "HSC"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-slate-500 font-sans mt-1 text-sm",
												children: "Cheran Matriculation Higher Secondary School"
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "mt-4",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-xs font-sans font-medium text-slate-400 uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-[#E5E0D0] shadow-sm",
													children: "2021 - 2022"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-slate-500 font-sans mt-1 text-[11px] font-bold tracking-widest uppercase",
													children: "Percentage : 89.5"
												})]
											})
										]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "flex flex-col items-center",
										children: /* @__PURE__ */ jsx("span", {
											className: "text-xs font-sans font-medium text-slate-400 uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-[#E5E0D0] shadow-sm",
											children: "2022 - 2026"
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-center text-center px-2",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: "/adelaide.jpg",
												alt: "Adelaide University",
												className: "w-full aspect-[4/3] object-cover rounded-xl border border-[#E5E0D0] shadow-sm mb-4 bg-slate-100",
												onError: (e) => {
													e.currentTarget.style.display = "none";
												}
											}),
											/* @__PURE__ */ jsx("h4", {
												className: "text-xl font-serif text-[#0F172A]",
												children: "Master's AI & ML"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-slate-500 font-sans mt-1 text-xs",
												children: "Adelaide University, Australia"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "mt-4",
												children: /* @__PURE__ */ jsx("span", {
													className: "text-xs font-sans font-bold text-white uppercase tracking-wider bg-[#EA580C] px-4 py-1.5 rounded-full shadow-sm",
													children: "Present"
												})
											})
										]
									})
								]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-32 max-w-5xl mx-auto border-t border-[#E5E0D0] pt-24 mb-20 relative",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 top-32 z-0 opacity-30 pointer-events-none",
						style: {
							backgroundImage: "linear-gradient(#E5E0D0 1px, transparent 1px), linear-gradient(90deg, #E5E0D0 1px, transparent 1px)",
							backgroundSize: "40px 40px"
						}
					}),
					/* @__PURE__ */ jsxs("h3", {
						className: "text-4xl font-serif text-[#0F172A] mb-20 text-center relative z-10",
						children: ["Technical ", /* @__PURE__ */ jsx("span", {
							className: "italic text-[#EA580C]",
							children: "Skills"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative px-4 sm:px-12 lg:px-16 pt-8 pb-16",
						children: [/* @__PURE__ */ jsx("svg", {
							className: "absolute top-[20px] left-0 w-full h-[150px] pointer-events-none hidden md:block z-0",
							viewBox: "0 0 1000 200",
							preserveAspectRatio: "none",
							children: /* @__PURE__ */ jsx("path", {
								d: "M -50 40 Q 83 100, 166 60 Q 333 120, 500 60 Q 666 120, 833 60 Q 916 100, 1050 40",
								fill: "none",
								stroke: "#1E293B",
								strokeWidth: "3.5",
								strokeLinecap: "round"
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10",
							children: skills.map((skill, index) => {
								const colors = [
									"bg-[#FFB7C5] text-[#4A1521]",
									"bg-[#A9D3E9] text-[#123143]",
									"bg-[#FCF89E] text-[#424212]"
								];
								const rotations = [
									"-rotate-2",
									"rotate-1",
									"-rotate-1"
								];
								const color = colors[index % colors.length];
								const rotation = rotations[index % rotations.length];
								return /* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { delay: index * .1 },
									className: `relative w-full aspect-[3/4] ${color} ${rotation} shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-6 py-12 flex flex-col items-center hover:-translate-y-2 hover:shadow-[0_15px_40px_rgb(0,0,0,0.1)] transition-all duration-300 ease-out`,
									children: [
										/* @__PURE__ */ jsx("div", { className: "absolute top-2 left-[-15%] right-[-15%] h-[3px] bg-[#1E293B] md:hidden z-0 rounded-full" }),
										/* @__PURE__ */ jsxs("div", {
											className: "absolute -top-[28px] left-1/2 -translate-x-1/2 flex flex-col items-center z-20 drop-shadow-md",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex space-x-2 relative z-0",
												children: [/* @__PURE__ */ jsx("div", { className: "w-3 h-7 border-[2.5px] border-[#94A3B8] rounded-t-full border-b-0" }), /* @__PURE__ */ jsx("div", { className: "w-3 h-7 border-[2.5px] border-[#94A3B8] rounded-t-full border-b-0" })]
											}), /* @__PURE__ */ jsx("div", {
												className: "w-10 h-5 bg-[#0F172A] rounded-sm shadow-sm -mt-[2px] relative z-10 border-b border-black",
												children: /* @__PURE__ */ jsx("div", { className: "absolute top-1 left-1 right-1 h-[2px] bg-white/20 rounded-full" })
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mb-6 flex flex-col items-center text-center mt-2",
											children: [/* @__PURE__ */ jsx("div", {
												className: "opacity-60 mb-5",
												children: /* @__PURE__ */ jsx(skill.icon, {
													className: "h-10 w-10",
													strokeWidth: 1.5
												})
											}), /* @__PURE__ */ jsx("h3", {
												className: "text-3xl font-serif tracking-wide",
												children: skill.name
											})]
										}),
										/* @__PURE__ */ jsx("ul", {
											className: "space-y-4 w-full mt-2",
											children: skill.items.map((item) => /* @__PURE__ */ jsx("li", {
												className: "flex items-center justify-center font-sans font-medium text-[17px] opacity-80 tracking-wide",
												children: item
											}, item))
										}),
										/* @__PURE__ */ jsx("div", {
											className: "absolute bottom-0 right-0 w-10 h-10 bg-[#FAF7F2]",
											style: { clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }
										}),
										/* @__PURE__ */ jsx("div", {
											className: `absolute bottom-0 right-0 w-10 h-10 ${color} shadow-[-3px_-3px_5px_rgba(0,0,0,0.08)] brightness-[0.92]`,
											style: { clipPath: "polygon(100% 0, 0 100%, 0 0)" }
										})
									]
								}, skill.name);
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-32 max-w-4xl mx-auto border-t border-[#E5E0D0] pt-24 mb-20",
				children: [/* @__PURE__ */ jsxs("h3", {
					className: "text-4xl font-serif text-[#0F172A] mb-12 text-center",
					children: ["Industrial ", /* @__PURE__ */ jsx("span", {
						className: "italic text-[#EA580C]",
						children: "Experience"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "border-l-2 border-[#E5E0D0] pl-8 relative",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute w-4 h-4 rounded-full bg-[#EA580C] -left-[9px] top-2" }),
							/* @__PURE__ */ jsx("span", {
								className: "text-sm font-sans font-medium text-[#EA580C] uppercase tracking-wider",
								children: "April 2024 - July 2025"
							}),
							/* @__PURE__ */ jsx("h4", {
								className: "text-2xl font-serif text-[#0F172A] mt-2",
								children: "Software Developer Trainee"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-slate-500 font-sans mt-1 mb-4",
								children: "Technology Innovation Hub, MKCE"
							}),
							/* @__PURE__ */ jsxs("ul", {
								className: "text-slate-600 font-sans font-light leading-relaxed list-disc ml-5 space-y-2",
								children: [
									/* @__PURE__ */ jsxs("li", { children: [
										"Built ",
										/* @__PURE__ */ jsx("strong", { children: "scalable distributed" }),
										" backend with PHP & SQL, reducing latency by ",
										/* @__PURE__ */ jsx("strong", { children: "30%" }),
										" and throughput."
									] }),
									/* @__PURE__ */ jsxs("li", { children: [
										"Developed RESTful APIs to improve communication and system reliability by ",
										/* @__PURE__ */ jsx("strong", { children: "40%" }),
										"."
									] }),
									/* @__PURE__ */ jsxs("li", { children: [
										"Optimized queries and indexing, cutting processing time by ",
										/* @__PURE__ */ jsx("strong", { children: "35%" }),
										" and enhancing performance."
									] })
								]
							})
						]
					})
				})]
			})
		]
	});
});
//#endregion
//#region app/routes/projects.tsx
var projects_exports = /* @__PURE__ */ __exportAll({
	default: () => projects_default,
	meta: () => meta$4
});
function meta$4({}) {
	return [{ title: "Projects | Portfolio" }, {
		name: "description",
		content: "My technical projects and case studies."
	}];
}
var projects_default = UNSAFE_withComponentProps(function Projects() {
	return /* @__PURE__ */ jsxs("div", {
		className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32",
		children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "mb-16 text-center max-w-3xl mx-auto",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-center space-x-3 text-[#EA580C] mb-6",
				children: [/* @__PURE__ */ jsx(FolderGit2, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
					className: "font-serif italic text-xl tracking-tight",
					children: "/projects"
				})]
			}), /* @__PURE__ */ jsxs("h1", {
				className: "text-4xl md:text-6xl font-serif text-[#0F172A] leading-tight",
				children: ["Deployed ", /* @__PURE__ */ jsx("span", {
					className: "italic text-[#EA580C]",
					children: "Systems"
				})]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-12 mt-16",
			children: [
				{
					title: "PLANGO - AI Trip Planner",
					description: "Built a scalable AI-based trip optimizer with real-time traffic data, improving route accuracy by 40% and reducing latency by 60%. Engineered predictive models for traffic and time optimization, boosting user satisfaction by 35%.",
					tags: [
						"Flask",
						"Python-ML",
						"SQLite",
						"JS"
					],
					github: "https://github.com/jayanthansenthilkumar",
					demo: "#",
					status: "Production"
				},
				{
					title: "Cargo Fleet Management System",
					description: "Designed an IoT fleet system integrating ML load prediction and distributed data pipelines, improving utilization by 55%. Implemented real-time tracking and safety monitoring pipelines, improving transport reliability and reducing logistics delays by 35%.",
					tags: [
						"Laravel",
						"IoT",
						"Python-ML",
						"Arduino"
					],
					github: "https://github.com/jayanthansenthilkumar",
					demo: "#",
					status: "Production"
				},
				{
					title: "KR Connect - Smart College ERP",
					description: "Developed core modules for Discipline and Grievance Management using PHP, Ajax, jQuery, and MySQL, streamlining issue tracking and student record updates by 50%. Built real-time dashboards using HTML, CSS, JS, boosting load speed and efficiency by 45%.",
					tags: [
						"HTML",
						"CSS",
						"JS",
						"PHP",
						"Ajax",
						"MySQL"
					],
					github: "https://github.com/jayanthansenthilkumar",
					demo: "#",
					status: "Production"
				}
			].map((project, index) => /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: index * .1 },
				className: "group relative bg-[#FAF7F2] border border-[#E5E0D0] rounded-2xl p-10 hover:border-[#EA580C]/50 hover:shadow-xl transition-all flex flex-col shadow-sm",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex justify-between items-start mb-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "px-3 py-1 rounded-full bg-white text-slate-600 font-sans text-xs border border-[#E5E0D0] shadow-sm uppercase tracking-wider",
							children: ["Status: ", /* @__PURE__ */ jsx("span", {
								className: project.status === "Production" ? "text-[#0F172A] font-semibold" : "text-[#EA580C] font-semibold",
								children: project.status
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex space-x-4 text-slate-400 group-hover:text-[#0F172A]",
							children: [/* @__PURE__ */ jsx("a", {
								href: project.github,
								className: "hover:text-[#EA580C] transition-colors",
								children: /* @__PURE__ */ jsx(Code2, { className: "w-5 h-5" })
							}), /* @__PURE__ */ jsx("a", {
								href: project.demo,
								className: "hover:text-[#EA580C] transition-colors",
								children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5" })
							})]
						})]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-3xl font-serif text-[#0F172A] mb-4 group-hover:text-[#EA580C] transition-colors",
						children: project.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-slate-600 mb-10 flex-grow leading-relaxed font-light text-lg",
						children: project.description
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-3 mt-auto",
						children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", {
							className: "text-sm font-sans font-medium text-slate-600 bg-white px-3 py-1 rounded-md border border-[#E5E0D0]",
							children: tag
						}, tag))
					})
				]
			}, project.title))
		})]
	});
});
//#endregion
//#region app/routes/blogs.tsx
var blogs_exports = /* @__PURE__ */ __exportAll({
	default: () => blogs_default,
	meta: () => meta$3
});
function meta$3({}) {
	return [{ title: "Blog | Portfolio" }, {
		name: "description",
		content: "Articles on software engineering and technology."
	}];
}
var blogs_default = UNSAFE_withComponentProps(function Blogs() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@jayanthansenthilkumar?t=${Date.now()}`)}`).then((res) => res.json()).then((data) => {
			if (data.items) setPosts(data.items);
			setIsLoading(false);
		}).catch((err) => {
			console.error("Failed to fetch Medium articles", err);
			setIsLoading(false);
		});
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "mb-16 text-center max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center space-x-3 text-[#EA580C] mb-6",
						children: [/* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
							className: "font-serif italic text-xl tracking-tight",
							children: "/blog"
						})]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-4xl md:text-6xl font-serif text-[#0F172A] mb-8 leading-tight",
						children: ["Technical ", /* @__PURE__ */ jsx("span", {
							className: "italic text-[#EA580C]",
							children: "Writings"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xl text-slate-600 font-sans font-light",
						children: "Thoughts, learnings, and deep dives into software engineering, architecture, and developer tools."
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { children: isLoading ? /* @__PURE__ */ jsxs("div", {
				className: "text-center py-20",
				children: [/* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EA580C] mx-auto" }), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-slate-500 font-sans",
					children: "Loading latest articles from Medium..."
				})]
			}) : posts.length === 0 ? /* @__PURE__ */ jsx("div", {
				className: "text-center py-20 text-slate-500 font-sans",
				children: "No articles found."
			}) : /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
				children: posts.map((post, index) => /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: index * .1 },
					className: "h-full",
					children: /* @__PURE__ */ jsxs("article", {
						className: "flex flex-col md:flex-row bg-[#FAF7F2] border border-[#E5E0D0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative h-full",
						children: [/* @__PURE__ */ jsx("div", {
							className: "md:w-[40%] min-h-[200px] md:min-h-full bg-[#E5E0D0] relative border-b md:border-b-0 md:border-r border-[#E5E0D0] flex flex-col justify-center items-center overflow-hidden shrink-0",
							children: post.thumbnail ? /* @__PURE__ */ jsx("img", {
								src: post.thumbnail,
								alt: post.title,
								className: "absolute inset-0 w-full h-full object-cover"
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-200 to-[#E5E0D0] opacity-50" }), /* @__PURE__ */ jsxs("div", {
								className: "relative z-10 text-center",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-serif text-2xl md:text-3xl text-[#0F172A] leading-none mb-1",
									children: "Jayanthan"
								}), /* @__PURE__ */ jsx("p", {
									className: "font-serif italic text-xl text-[#EA580C]",
									children: "Insights"
								})]
							})] })
						}), /* @__PURE__ */ jsxs("div", {
							className: "md:w-[60%] p-5 md:p-6 flex flex-col justify-between flex-1",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-[#EA580C] font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3 flex items-center",
									children: /* @__PURE__ */ jsx("span", { children: new Date(post.pubDate.replace(/-/g, "/")).toLocaleDateString("en-US", {
										year: "numeric",
										month: "short",
										day: "numeric"
									}) })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-serif text-[#0F172A] mb-2 group-hover:text-[#EA580C] transition-colors leading-tight",
									children: /* @__PURE__ */ jsx(Link, {
										to: `/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
										className: "before:absolute before:inset-0",
										children: post.title
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center space-x-2 text-slate-500 text-sm mb-3",
									children: [/* @__PURE__ */ jsx(User, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: post.author || "Jayanthan Senthilkumar" })]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-slate-600 font-sans font-light leading-relaxed mb-4 text-sm line-clamp-3",
									children: post.description.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ")
								})
							] }), /* @__PURE__ */ jsxs("div", {
								className: "flex justify-between items-center border-t border-[#E5E0D0] pt-4 mt-2 relative z-20",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-2",
									children: post.categories && post.categories.slice(0, 2).map((category) => /* @__PURE__ */ jsx("span", {
										className: "px-3 py-1 bg-white border border-[#E5E0D0] text-slate-500 rounded-full text-[10px] font-medium uppercase tracking-wider",
										children: category
									}, category))
								}), /* @__PURE__ */ jsxs(Link, {
									to: `/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
									className: "flex items-center space-x-1 text-[#EA580C] hover:text-[#C2410C] text-[10px] font-bold tracking-[0.1em] uppercase transition-colors shrink-0 ml-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "hidden sm:inline",
										children: "Read Article"
									}), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3 md:w-4 md:h-4" })]
								})]
							})]
						})]
					})
				}, post.guid || index))
			}) }),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-24 bg-[#0F172A] rounded-3xl p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" }),
					/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ jsxs("h3", {
								className: "text-3xl font-serif mb-4",
								children: ["Join the ", /* @__PURE__ */ jsx("span", {
									className: "italic text-[#EA580C]",
									children: "Newsletter"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-slate-300 font-sans font-light mb-8 max-w-lg mx-auto",
								children: "Get the latest articles, deep dives, and tech insights delivered straight to your inbox once a month. No spam, unsubscribe anytime."
							}),
							/* @__PURE__ */ jsxs("form", {
								className: "flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto",
								children: [/* @__PURE__ */ jsx("input", {
									type: "email",
									placeholder: "Enter your email",
									className: "px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#EA580C] w-full"
								}), /* @__PURE__ */ jsx("button", {
									type: "button",
									className: "px-8 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium transition-colors whitespace-nowrap",
									children: "Subscribe"
								})]
							})
						]
					})
				]
			})
		]
	});
});
//#endregion
//#region app/routes/article.tsx
var article_exports = /* @__PURE__ */ __exportAll({
	default: () => article_default,
	meta: () => meta$2
});
function meta$2({ params }) {
	return [{ title: `Article | Portfolio` }, {
		name: "description",
		content: "Technical writing deep dive."
	}];
}
var article_default = UNSAFE_withComponentProps(function Article() {
	const { slug } = useParams();
	const [article, setArticle] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@jayanthansenthilkumar?t=${Date.now()}`)}`).then((res) => res.json()).then((data) => {
			if (data.items) setArticle(data.items.find((item) => item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug) || null);
			setIsLoading(false);
		}).catch((err) => {
			console.error("Failed to fetch article", err);
			setIsLoading(false);
		});
	}, [slug]);
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 bg-[#F6F4EB] min-h-screen flex items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [/* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EA580C] mx-auto" }), /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-slate-500 font-sans",
				children: "Loading article..."
			})]
		})
	});
	if (!article) return /* @__PURE__ */ jsxs("div", {
		className: "py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 bg-[#F6F4EB] min-h-screen text-center",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-4xl font-serif text-[#0F172A] mb-4",
				children: "Article Not Found"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-slate-500 font-sans mb-8",
				children: "We couldn't find the article you're looking for."
			}),
			/* @__PURE__ */ jsxs(Link, {
				to: "/blogs",
				className: "inline-flex items-center space-x-2 text-[#EA580C] hover:text-[#C2410C] font-medium uppercase tracking-wider text-sm",
				children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Back to Articles" })]
			})
		]
	});
	return /* @__PURE__ */ jsx("div", {
		className: "py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 bg-[#F6F4EB] min-h-screen",
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .6 },
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/blogs",
					className: "inline-flex items-center space-x-2 text-slate-500 hover:text-[#EA580C] transition-colors mb-12 font-sans font-medium uppercase tracking-wider text-sm",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Back to Articles" })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center space-x-4 text-sm font-sans text-slate-500 mb-6 uppercase tracking-wider",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center space-x-1",
							children: [/* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: new Date(article.pubDate.replace(/-/g, "/")).toLocaleDateString("en-US", {
								year: "numeric",
								month: "short",
								day: "numeric"
							}) })]
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-[#E5E0D0]",
							children: "|"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center space-x-1 text-[#EA580C]",
							children: [/* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }), /* @__PURE__ */ jsxs("span", { children: [Math.max(1, Math.ceil(article.content.split(" ").length / 200)), " min read"] })]
						})
					]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-5xl md:text-6xl font-serif text-[#0F172A] leading-tight mb-8",
					children: article.title
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between border-y border-[#E5E0D0] py-4 mb-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-10 h-10 rounded-full bg-[#EA580C] flex items-center justify-center text-white font-serif font-bold text-lg",
							children: article.author ? article.author.split(" ").map((n) => n[0]).join("").substring(0, 2) : "JS"
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-serif text-[#0F172A] font-medium leading-tight",
							children: article.author || "Jayanthan Senthilkumar"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-slate-500 text-sm font-sans",
							children: "Author"
						})] })]
					}), /* @__PURE__ */ jsx("button", {
						className: "p-2 rounded-full border border-[#E5E0D0] hover:border-[#EA580C] hover:text-[#EA580C] text-slate-500 transition-colors",
						children: /* @__PURE__ */ jsx(Share2, { className: "w-5 h-5" })
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "font-sans font-light text-lg text-slate-700 leading-relaxed space-y-6 \n            [&>h1]:font-serif [&>h1]:text-4xl [&>h1]:text-[#0F172A] [&>h1]:mt-12 [&>h1]:mb-6\n            [&>h2]:font-serif [&>h2]:text-3xl [&>h2]:text-[#0F172A] [&>h2]:mt-12 [&>h2]:mb-6\n            [&>h3]:font-serif [&>h3]:text-2xl [&>h3]:text-[#0F172A] [&>h3]:mt-8 [&>h3]:mb-4\n            [&>p]:mb-6\n            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-3\n            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-3\n            [&>blockquote]:border-l-4 [&>blockquote]:border-[#EA580C] [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:font-serif [&>blockquote]:text-2xl [&>blockquote]:italic [&>blockquote]:text-[#0F172A]\n            [&_img]:rounded-xl [&_img]:my-8 [&_img]:w-full [&_img]:h-auto\n            [&_a]:text-[#EA580C] [&_a]:underline",
					dangerouslySetInnerHTML: { __html: article.content || article.description }
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-16 pt-8 border-t border-[#E5E0D0] flex justify-between items-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-sans text-slate-500",
						children: "Share this article"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex space-x-4",
						children: [/* @__PURE__ */ jsx("button", {
							className: "text-slate-400 hover:text-[#EA580C] font-medium uppercase tracking-wider text-sm transition-colors",
							children: "Twitter"
						}), /* @__PURE__ */ jsx("button", {
							className: "text-slate-400 hover:text-[#EA580C] font-medium uppercase tracking-wider text-sm transition-colors",
							children: "LinkedIn"
						})]
					})]
				})
			]
		})
	});
});
//#endregion
//#region app/routes/contact.tsx
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => contact_default,
	meta: () => meta$1
});
function meta$1({}) {
	return [{ title: "Hire Me | Jayanthan Senthilkumar" }, {
		name: "description",
		content: "Get in touch for hiring opportunities."
	}];
}
var contact_default = UNSAFE_withComponentProps(function Contact() {
	const form = useRef(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState("idle");
	const sendEmail = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");
		const SERVICE_ID = "service_jeoes5u";
		const TEMPLATE_ID = "template_43f4k5x";
		const PUBLIC_KEY = "ZRZcBlELrxgInVaT2";
		if (form.current) emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then((result) => {
			console.log(result.text);
			setSubmitStatus("success");
			form.current?.reset();
		}, (error) => {
			console.log(error.text);
			setSubmitStatus("error");
		}).finally(() => {
			setIsSubmitting(false);
			setTimeout(() => setSubmitStatus("idle"), 5e3);
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "text-center mb-20 max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center space-x-3 text-[#EA580C] mb-6 justify-center",
						children: [/* @__PURE__ */ jsx(Terminal, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
							className: "font-serif italic text-xl tracking-tight",
							children: "/open-to-work"
						})]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-4xl md:text-6xl font-serif text-[#0F172A] mb-8 leading-tight",
						children: ["Ready to ", /* @__PURE__ */ jsx("span", {
							className: "italic text-[#EA580C]",
							children: "Join Your Team"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-sans font-light leading-relaxed",
						children: "I'm a highly motivated AI & ML Engineer actively seeking full-time opportunities to bring data-driven impact to your organization. Are you a recruiter or hiring manager? Let's connect and discuss how my skills align with your vision."
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",
				children: [/* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: .2 },
					className: "flex flex-col",
					children: /* @__PURE__ */ jsxs("div", {
						className: "bg-[#FAF7F2] border border-[#E5E0D0] rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-serif text-[#0F172A] mb-6",
							children: "Send a Message"
						}), /* @__PURE__ */ jsxs("form", {
							ref: form,
							onSubmit: sendEmail,
							className: "space-y-6 relative z-10",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "recruiter_name",
										className: "block text-xs font-sans font-bold text-slate-700 mb-2 uppercase tracking-widest",
										children: "Recruiter Name"
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										name: "recruiter_name",
										id: "recruiter_name",
										required: true,
										className: "w-full bg-white border border-[#E5E0D0] rounded-lg px-5 py-4 text-slate-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors",
										placeholder: "Your Name"
									})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "work_email",
										className: "block text-xs font-sans font-bold text-slate-700 mb-2 uppercase tracking-widest",
										children: "Work Email"
									}), /* @__PURE__ */ jsx("input", {
										type: "email",
										name: "work_email",
										id: "work_email",
										required: true,
										className: "w-full bg-white border border-[#E5E0D0] rounded-lg px-5 py-4 text-slate-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors",
										placeholder: "Yourmail@company.com"
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "company_name",
										className: "block text-xs font-sans font-bold text-slate-700 mb-2 uppercase tracking-widest",
										children: "Company Name"
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										name: "company_name",
										id: "company_name",
										required: true,
										className: "w-full bg-white border border-[#E5E0D0] rounded-lg px-5 py-4 text-slate-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors",
										placeholder: "Tech Corp Inc."
									})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "position",
										className: "block text-xs font-sans font-bold text-slate-700 mb-2 uppercase tracking-widest",
										children: "Open Role / Position"
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										name: "position",
										id: "position",
										required: true,
										className: "w-full bg-white border border-[#E5E0D0] rounded-lg px-5 py-4 text-slate-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors",
										placeholder: "Senior AI Engineer"
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "message",
									className: "block text-xs font-sans font-bold text-slate-700 mb-2 uppercase tracking-widest",
									children: "Message / Job Details"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "message",
									id: "message",
									required: true,
									rows: 4,
									className: "w-full bg-white border border-[#E5E0D0] rounded-lg px-5 py-4 text-slate-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors resize-none",
									placeholder: "Hi Jayanthan, we're looking for an ML Engineer to join our team to work on..."
								})] }),
								/* @__PURE__ */ jsxs("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "w-full bg-[#0F172A] hover:bg-[#1E293B] disabled:bg-slate-400 text-white font-medium py-4 rounded-lg flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-lg",
									children: [/* @__PURE__ */ jsx(Send, { className: "w-5 h-5" }), /* @__PURE__ */ jsx("span", { children: isSubmitting ? "Sending..." : "Send Message" })]
								}),
								submitStatus === "success" && /* @__PURE__ */ jsx("div", {
									className: "p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-sm text-center font-medium",
									children: "Message sent successfully! I'll get back to you soon."
								}),
								submitStatus === "error" && /* @__PURE__ */ jsx("div", {
									className: "p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm text-center font-medium",
									children: "Failed to send message. Please ensure you have set up your EmailJS credentials in the code."
								})
							]
						})]
					})
				}), /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						x: 20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: .3 },
					className: "flex flex-col space-y-10 lg:h-full",
					children: [/* @__PURE__ */ jsx("div", {
						className: "h-[400px] lg:flex-1 w-full rounded-2xl overflow-hidden border border-[#E5E0D0] shadow-sm relative group min-h-[350px]",
						children: /* @__PURE__ */ jsx("iframe", {
							src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418336.8778945417!2d138.28151240292723!3d-34.92849886733221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab735c7c526b33f%3A0x4033654628ec640!2sAdelaide%20SA%2C%20Australia!5e0!3m2!1sen!2sin!4v1714553245468!5m2!1sen!2sin",
							className: "w-full h-full absolute inset-0",
							style: { border: 0 },
							allowFullScreen: false,
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start space-x-4 p-6 bg-white border border-[#E5E0D0] rounded-2xl shadow-sm hover:border-[#EA580C]/50 transition-colors group",
							children: [/* @__PURE__ */ jsx("div", {
								className: "p-3 bg-[#FAF7F2] rounded-xl text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition-colors",
								children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "overflow-hidden",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[#0F172A] font-sans font-bold text-sm uppercase tracking-wider mb-1",
									children: "Email"
								}), /* @__PURE__ */ jsx("a", {
									href: "mailto:jayanthansenthilkumar18@gmail.com",
									className: "text-slate-600 font-sans text-sm hover:text-[#EA580C] transition-colors truncate block",
									children: "jayanthansenthilkumar18@gmail.com"
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-start space-x-4 p-6 bg-white border border-[#E5E0D0] rounded-2xl shadow-sm hover:border-[#EA580C]/50 transition-colors group",
							children: [/* @__PURE__ */ jsx("div", {
								className: "p-3 bg-[#FAF7F2] rounded-xl text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition-colors",
								children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "overflow-hidden",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-[#0F172A] font-sans font-bold text-sm uppercase tracking-wider mb-1",
										children: "Contact"
									}),
									/* @__PURE__ */ jsx("a", {
										href: "tel:+918825756388",
										className: "text-slate-600 font-sans text-sm hover:text-[#EA580C] transition-colors block mb-1",
										children: "+91 8825756388"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex space-x-3 text-xs font-sans font-medium text-[#EA580C]",
										children: [
											/* @__PURE__ */ jsx("a", {
												href: "https://www.linkedin.com/in/jayanthan18",
												target: "_blank",
												rel: "noreferrer",
												className: "hover:underline",
												children: "LinkedIn"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-300",
												children: "|"
											}),
											/* @__PURE__ */ jsx("a", {
												href: "https://github.com/jayanthansenthilkumar",
												target: "_blank",
												rel: "noreferrer",
												className: "hover:underline",
												children: "GitHub"
											})
										]
									})
								]
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-32 border-t border-[#E5E0D0] pt-20",
				children: [/* @__PURE__ */ jsxs("h3", {
					className: "text-4xl font-serif text-[#0F172A] mb-12 text-center",
					children: ["Frequently Asked ", /* @__PURE__ */ jsx("span", {
						className: "italic text-[#EA580C]",
						children: "Questions"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto space-y-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "bg-[#FAF7F2] border border-[#E5E0D0] p-6 rounded-2xl",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xl font-serif text-[#0F172A] mb-2",
								children: "Are you available for freelance work?"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-slate-600 font-sans font-light",
								children: "Yes, I take on select freelance projects depending on my current bandwidth. Please reach out with details about your project, timeline, and budget."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-[#FAF7F2] border border-[#E5E0D0] p-6 rounded-2xl",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xl font-serif text-[#0F172A] mb-2",
								children: "What is your typical response time?"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-slate-600 font-sans font-light",
								children: "I aim to respond to all business inquiries within 24-48 hours during regular business days."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-[#FAF7F2] border border-[#E5E0D0] p-6 rounded-2xl",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xl font-serif text-[#0F172A] mb-2",
								children: "Do you work internationally?"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-slate-600 font-sans font-light",
								children: "Absolutely! I work asynchronously with clients across multiple timezones, primarily leveraging tools like Slack, Zoom, and async updates."
							})]
						})
					]
				})]
			})
		]
	});
});
//#endregion
//#region app/routes/resume.tsx
var resume_exports = /* @__PURE__ */ __exportAll({
	default: () => resume_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Resume | Jayanthan Senthilkumar" }, {
		name: "description",
		content: "Professional resume of Jayanthan Senthilkumar"
	}];
}
var resume_default = UNSAFE_withComponentProps(function Resume() {
	return /* @__PURE__ */ jsxs("div", {
		className: "py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 min-h-screen flex flex-col",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center space-x-3 text-[#EA580C] mb-4",
				children: [/* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
					className: "font-serif italic text-xl tracking-tight",
					children: "/resume"
				})]
			}), /* @__PURE__ */ jsxs("h1", {
				className: "text-4xl md:text-5xl font-serif text-[#0F172A] leading-tight",
				children: ["Curriculum ", /* @__PURE__ */ jsx("span", {
					className: "italic text-[#EA580C]",
					children: "Vitae"
				})]
			})] }), /* @__PURE__ */ jsxs("a", {
				href: "/Resume.pdf",
				download: "Jayanthan_Senthilkumar_Resume.pdf",
				className: "px-6 py-3 bg-[#0F172A] text-white font-sans font-bold text-sm tracking-widest uppercase rounded flex items-center space-x-2 hover:bg-[#EA580C] transition-colors shadow-md",
				children: [/* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Download PDF" })]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex-1 w-full bg-slate-100 rounded-xl overflow-hidden border border-[#E5E0D0] shadow-sm flex flex-col",
			children: /* @__PURE__ */ jsx("object", {
				data: "/Resume.pdf",
				type: "application/pdf",
				className: "w-full h-[70vh] md:h-[800px]",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center justify-center h-full p-12 text-center bg-[#FAF7F2]",
					children: [
						/* @__PURE__ */ jsx(FileText, { className: "w-16 h-16 text-slate-300 mb-4" }),
						/* @__PURE__ */ jsx("p", {
							className: "text-[#0F172A] font-serif text-xl mb-2",
							children: "PDF viewer not available"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-slate-500 font-sans mb-6 max-w-md",
							children: [
								"Your browser does not support inline PDFs, or the ",
								/* @__PURE__ */ jsx("code", {
									className: "bg-white border border-[#E5E0D0] px-1.5 py-0.5 rounded text-[#EA580C]",
									children: "resume.pdf"
								}),
								" file hasn't been placed in the ",
								/* @__PURE__ */ jsx("code", {
									className: "bg-white border border-[#E5E0D0] px-1.5 py-0.5 rounded text-[#EA580C]",
									children: "public"
								}),
								" folder yet."
							]
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/resume.pdf",
							download: "Jayanthan_Senthilkumar_Resume.pdf",
							className: "px-6 py-2 bg-[#EA580C] text-white rounded font-medium hover:bg-[#C2410C] transition-colors",
							children: "Download PDF Instead"
						})
					]
				})
			})
		})]
	});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-DArAZdvt.js",
		"imports": ["/assets/jsx-runtime-BDIMPI9k.js", "/assets/components-DPrIic0m.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-DbZs3YUJ.js",
			"imports": [
				"/assets/jsx-runtime-BDIMPI9k.js",
				"/assets/components-DPrIic0m.js",
				"/assets/lib-C7SupGur.js",
				"/assets/createLucideIcon-DaEiYjC2.js",
				"/assets/code-xml-D5iN9MG9.js",
				"/assets/calendar-DD16gSUR.js",
				"/assets/code-BNhrrhp6.js",
				"/assets/file-text-CHbzuTW2.js",
				"/assets/mail-DZIKPN0v.js",
				"/assets/terminal-CUFLFdcL.js",
				"/assets/user-CJgBLgxD.js",
				"/assets/proxy-DOQWZvMl.js"
			],
			"css": ["/assets/root-E8jLTpsh.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-0PdgjHXq.js",
			"imports": [
				"/assets/jsx-runtime-BDIMPI9k.js",
				"/assets/lib-C7SupGur.js",
				"/assets/code-xml-D5iN9MG9.js",
				"/assets/arrow-right-D85J3IxZ.js",
				"/assets/file-text-CHbzuTW2.js",
				"/assets/folder-git-2-sWv64IjU.js",
				"/assets/mail-DZIKPN0v.js",
				"/assets/send-D4sAud9f.js",
				"/assets/user-CJgBLgxD.js",
				"/assets/proxy-DOQWZvMl.js",
				"/assets/components-DPrIic0m.js",
				"/assets/createLucideIcon-DaEiYjC2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/about": {
			"id": "routes/about",
			"parentId": "root",
			"path": "about",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/about-BmD_Wgz0.js",
			"imports": [
				"/assets/jsx-runtime-BDIMPI9k.js",
				"/assets/createLucideIcon-DaEiYjC2.js",
				"/assets/code-BNhrrhp6.js",
				"/assets/user-CJgBLgxD.js",
				"/assets/proxy-DOQWZvMl.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/projects": {
			"id": "routes/projects",
			"parentId": "root",
			"path": "projects",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/projects-Cd-uE_wc.js",
			"imports": [
				"/assets/jsx-runtime-BDIMPI9k.js",
				"/assets/createLucideIcon-DaEiYjC2.js",
				"/assets/code-xml-D5iN9MG9.js",
				"/assets/folder-git-2-sWv64IjU.js",
				"/assets/proxy-DOQWZvMl.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/blogs": {
			"id": "routes/blogs",
			"parentId": "root",
			"path": "blogs",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/blogs-BkPq05BW.js",
			"imports": [
				"/assets/jsx-runtime-BDIMPI9k.js",
				"/assets/lib-C7SupGur.js",
				"/assets/arrow-right-D85J3IxZ.js",
				"/assets/file-text-CHbzuTW2.js",
				"/assets/user-CJgBLgxD.js",
				"/assets/proxy-DOQWZvMl.js",
				"/assets/components-DPrIic0m.js",
				"/assets/createLucideIcon-DaEiYjC2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/article": {
			"id": "routes/article",
			"parentId": "root",
			"path": "blogs/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/article-D2fAO3ny.js",
			"imports": [
				"/assets/jsx-runtime-BDIMPI9k.js",
				"/assets/lib-C7SupGur.js",
				"/assets/createLucideIcon-DaEiYjC2.js",
				"/assets/calendar-DD16gSUR.js",
				"/assets/proxy-DOQWZvMl.js",
				"/assets/components-DPrIic0m.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/contact": {
			"id": "routes/contact",
			"parentId": "root",
			"path": "contact",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/contact-MzC94JKz.js",
			"imports": [
				"/assets/jsx-runtime-BDIMPI9k.js",
				"/assets/createLucideIcon-DaEiYjC2.js",
				"/assets/mail-DZIKPN0v.js",
				"/assets/send-D4sAud9f.js",
				"/assets/terminal-CUFLFdcL.js",
				"/assets/proxy-DOQWZvMl.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/resume": {
			"id": "routes/resume",
			"parentId": "root",
			"path": "resume",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/resume-C8ismtP7.js",
			"imports": [
				"/assets/jsx-runtime-BDIMPI9k.js",
				"/assets/createLucideIcon-DaEiYjC2.js",
				"/assets/file-text-CHbzuTW2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-34b3a758.js",
	"version": "34b3a758",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = { "unstable_optimizeDeps": false };
var ssr = false;
var isSpaMode = false;
var prerender = [
	"/",
	"/about",
	"/projects",
	"/blogs",
	"/contact",
	"/resume"
];
var routeDiscovery = { "mode": "initial" };
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/about": {
		id: "routes/about",
		parentId: "root",
		path: "about",
		index: void 0,
		caseSensitive: void 0,
		module: about_exports
	},
	"routes/projects": {
		id: "routes/projects",
		parentId: "root",
		path: "projects",
		index: void 0,
		caseSensitive: void 0,
		module: projects_exports
	},
	"routes/blogs": {
		id: "routes/blogs",
		parentId: "root",
		path: "blogs",
		index: void 0,
		caseSensitive: void 0,
		module: blogs_exports
	},
	"routes/article": {
		id: "routes/article",
		parentId: "root",
		path: "blogs/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: article_exports
	},
	"routes/contact": {
		id: "routes/contact",
		parentId: "root",
		path: "contact",
		index: void 0,
		caseSensitive: void 0,
		module: contact_exports
	},
	"routes/resume": {
		id: "routes/resume",
		parentId: "root",
		path: "resume",
		index: void 0,
		caseSensitive: void 0,
		module: resume_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
