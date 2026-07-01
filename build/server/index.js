import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Calendar, Clock, Code, Code2, Cpu, Database, ExternalLink, FileText, FolderGit2, Globe, Mail, Menu, MessageCircle, MessageSquare, Send, Terminal, User, UserPlus, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
		className: "fixed w-full z-50 top-0 border-b border-cyan-900/30 bg-slate-950/80 backdrop-blur-md",
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex justify-between items-center h-16",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "flex items-center space-x-2 text-cyan-400 group",
						children: [/* @__PURE__ */ jsx(Terminal, { className: "h-6 w-6 group-hover:rotate-12 transition-transform" }), /* @__PURE__ */ jsx("span", {
							className: "font-mono font-bold text-xl tracking-tight",
							children: "dev.portfolio"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden md:flex space-x-8",
						children: links.map(({ to, label, icon: Icon }) => /* @__PURE__ */ jsxs(NavLink, {
							to,
							className: ({ isActive }) => `flex items-center space-x-1 text-sm font-medium transition-colors ${isActive ? "text-cyan-400" : "text-slate-400 hover:text-cyan-300"}`,
							children: [/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: label })]
						}, to))
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => setIsOpen(!isOpen),
						className: "md:hidden text-slate-400 hover:text-cyan-400",
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
			className: "md:hidden bg-slate-900 border-b border-cyan-900/30",
			children: /* @__PURE__ */ jsx("div", {
				className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
				children: links.map(({ to, label, icon: Icon }) => /* @__PURE__ */ jsxs(NavLink, {
					to,
					onClick: () => setIsOpen(false),
					className: ({ isActive }) => `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-cyan-900/20 text-cyan-400" : "text-slate-400 hover:bg-slate-800 hover:text-cyan-300"}`,
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
		className: "bg-slate-950 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" }),
			/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" }),
			/* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-12",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-1 md:col-span-2",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/",
								className: "flex items-center space-x-2 text-cyan-400 mb-4",
								children: [/* @__PURE__ */ jsx(Code2, { className: "h-8 w-8" }), /* @__PURE__ */ jsx("span", {
									className: "font-mono font-bold text-2xl tracking-tight",
									children: "dev.portfolio"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-slate-400 max-w-md text-lg",
								children: "Crafting digital experiences with modern web technologies. Specialized in React, Remix, and full-stack architecture."
							})]
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-white font-semibold text-lg mb-4 font-mono",
							children: "Navigation"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-3 text-slate-400",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
									to: "/",
									className: "hover:text-cyan-400 transition-colors flex items-center space-x-2",
									children: [/* @__PURE__ */ jsx("span", { children: ">" }), /* @__PURE__ */ jsx("span", { children: "Home" })]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
									to: "/about",
									className: "hover:text-cyan-400 transition-colors flex items-center space-x-2",
									children: [/* @__PURE__ */ jsx("span", { children: ">" }), /* @__PURE__ */ jsx("span", { children: "About" })]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
									to: "/projects",
									className: "hover:text-cyan-400 transition-colors flex items-center space-x-2",
									children: [/* @__PURE__ */ jsx("span", { children: ">" }), /* @__PURE__ */ jsx("span", { children: "Projects" })]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
									to: "/blogs",
									className: "hover:text-cyan-400 transition-colors flex items-center space-x-2",
									children: [/* @__PURE__ */ jsx("span", { children: ">" }), /* @__PURE__ */ jsx("span", { children: "Blogs" })]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									className: "hover:text-cyan-400 transition-colors flex items-center space-x-2",
									children: [/* @__PURE__ */ jsx("span", { children: ">" }), /* @__PURE__ */ jsx("span", { children: "Contact" })]
								}) })
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-white font-semibold text-lg mb-4 font-mono",
							children: "Connect"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex space-x-4",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "https://github.com",
									target: "_blank",
									rel: "noreferrer",
									className: "bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:-translate-y-1",
									children: /* @__PURE__ */ jsx(Code2, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://linkedin.com",
									target: "_blank",
									rel: "noreferrer",
									className: "bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:-translate-y-1",
									children: /* @__PURE__ */ jsx(UserPlus, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://twitter.com",
									target: "_blank",
									rel: "noreferrer",
									className: "bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:-translate-y-1",
									children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ jsx("a", {
									href: "mailto:hello@example.com",
									className: "bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:-translate-y-1",
									children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6" })
								})
							]
						})] })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "text-slate-500 font-mono text-sm",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" dev.portfolio. All rights reserved."
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-2 text-sm text-slate-500 font-mono",
						children: [/* @__PURE__ */ jsx("span", { children: "Built with" }), /* @__PURE__ */ jsx("span", {
							className: "text-cyan-400",
							children: "Remix & Tailwind"
						})]
					})]
				})]
			})
		]
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
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
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", {
			className: "bg-slate-950 text-slate-50 antialiased min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200",
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
	meta: () => meta$4
});
function meta$4({}) {
	return [{ title: "Portfolio | Full Stack Developer" }, {
		name: "description",
		content: "Welcome to my tech portfolio."
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							x: -50
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .8,
							ease: "easeOut"
						},
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 font-mono text-sm mb-6",
								children: [/* @__PURE__ */ jsx(Terminal, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "System initialized" })]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-100 to-indigo-200",
								children: [
									"Building Digital ",
									/* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-cyan-400",
										children: "Architectures"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed",
								children: "Full-stack developer specializing in scalable infrastructure, modern web experiences, and intelligent system design."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-4",
								children: [/* @__PURE__ */ jsxs(Link, {
									to: "/projects",
									className: "px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center space-x-2",
									children: [/* @__PURE__ */ jsx(Code2, { className: "w-5 h-5" }), /* @__PURE__ */ jsx("span", { children: "View Projects" })]
								}), /* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									className: "px-6 py-3 rounded-md bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 font-medium transition-all flex items-center space-x-2",
									children: [/* @__PURE__ */ jsx(Terminal, { className: "w-5 h-5" }), /* @__PURE__ */ jsx("span", { children: "_contact_me" })]
								})]
							})
						]
					}), /* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							scale: .9
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: 1,
							delay: .2
						},
						className: "hidden lg:block relative",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative w-full aspect-square rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 overflow-hidden shadow-2xl shadow-cyan-900/20 group",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-slate-800/[0.2] bg-[size:20px_20px]" }),
								/* @__PURE__ */ jsxs("div", {
									className: "relative z-10 flex flex-col h-full",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex space-x-2 mb-6",
										children: [
											/* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-rose-500/80" }),
											/* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-amber-500/80" }),
											/* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-emerald-500/80" })
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1 font-mono text-sm space-y-4",
										children: [
											/* @__PURE__ */ jsx(motion.div, {
												initial: {
													opacity: 0,
													y: 10
												},
												animate: {
													opacity: 1,
													y: 0
												},
												transition: { delay: .5 },
												className: "text-cyan-400",
												children: "$ pnpm create remix@latest my-portfolio"
											}),
											/* @__PURE__ */ jsxs(motion.div, {
												initial: { opacity: 0 },
												animate: { opacity: 1 },
												transition: { delay: 1.5 },
												className: "text-slate-400",
												children: [
													"✔ Installed dependencies",
													/* @__PURE__ */ jsx("br", {}),
													"✔ Compiled successfully"
												]
											}),
											/* @__PURE__ */ jsxs(motion.div, {
												initial: { opacity: 0 },
												animate: { opacity: 1 },
												transition: { delay: 2.5 },
												className: "text-emerald-400 flex items-center space-x-2 mt-4",
												children: [/* @__PURE__ */ jsx(Cpu, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Server running on http://localhost:3000" })]
											})
										]
									})]
								}),
								/* @__PURE__ */ jsx(motion.div, {
									animate: { top: ["0%", "100%"] },
									transition: {
										duration: 3,
										repeat: Infinity,
										ease: "linear"
									},
									className: "absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"
								})
							]
						})
					})]
				})
			})
		]
	});
});
//#endregion
//#region app/routes/about.tsx
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => about_default,
	meta: () => meta$3
});
function meta$3({}) {
	return [{ title: "About | Portfolio" }, {
		name: "description",
		content: "About me and my tech stack."
	}];
}
var about_default = UNSAFE_withComponentProps(function About() {
	const skills = [
		{
			name: "Frontend",
			icon: Globe,
			items: [
				"React",
				"Remix",
				"Tailwind CSS",
				"Framer Motion"
			]
		},
		{
			name: "Backend",
			icon: Database,
			items: [
				"Node.js",
				"PostgreSQL",
				"Redis",
				"GraphQL"
			]
		},
		{
			name: "Core",
			icon: Code,
			items: [
				"TypeScript",
				"Python",
				"Go",
				"Rust"
			]
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "mb-16",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center space-x-3 text-cyan-400 mb-4",
					children: [/* @__PURE__ */ jsx(User, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
						className: "font-mono text-xl tracking-tight",
						children: "/about-me"
					})]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-bold mb-8 text-white",
					children: "System Architecture of a Developer"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "prose prose-invert prose-lg max-w-3xl text-slate-400",
					children: [/* @__PURE__ */ jsx("p", { children: "I am a software engineer focused on building robust, scalable, and visually compelling web applications. My approach combines clean code architecture with modern aesthetic principles, ensuring that systems not only perform flawlessly under pressure but also deliver exceptional user experiences." }), /* @__PURE__ */ jsx("p", { children: "With a background in both systems programming and interface design, I bridge the gap between complex backend logic and intuitive frontend interactions." })]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-8",
			children: skills.map((skill, index) => /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: index * .1 },
				className: "bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center space-x-3 mb-6",
					children: [/* @__PURE__ */ jsx("div", {
						className: "p-2 bg-slate-800 rounded-lg text-cyan-400",
						children: /* @__PURE__ */ jsx(skill.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsx("h3", {
						className: "text-xl font-semibold text-white",
						children: skill.name
					})]
				}), /* @__PURE__ */ jsx("ul", {
					className: "space-y-3",
					children: skill.items.map((item) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-center space-x-2 text-slate-400",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-cyan-500 font-mono",
							children: ">"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-mono text-sm",
							children: item
						})]
					}, item))
				})]
			}, skill.name))
		})]
	});
});
//#endregion
//#region app/routes/projects.tsx
var projects_exports = /* @__PURE__ */ __exportAll({
	default: () => projects_default,
	meta: () => meta$2
});
function meta$2({}) {
	return [{ title: "Projects | Portfolio" }, {
		name: "description",
		content: "My technical projects and case studies."
	}];
}
var projects_default = UNSAFE_withComponentProps(function Projects() {
	return /* @__PURE__ */ jsxs("div", {
		className: "py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "mb-12",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center space-x-3 text-cyan-400 mb-4",
				children: [/* @__PURE__ */ jsx(FolderGit2, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
					className: "font-mono text-xl tracking-tight",
					children: "/projects"
				})]
			}), /* @__PURE__ */ jsx("h1", {
				className: "text-4xl md:text-5xl font-bold text-white",
				children: "Deployed Systems"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-8",
			children: [
				{
					title: "Nexus Analytics Platform",
					description: "A high-performance data visualization dashboard built for real-time stream processing. Handles millions of events per second with sub-millisecond latency.",
					tags: [
						"React",
						"Go",
						"ClickHouse",
						"WebSockets"
					],
					github: "#",
					demo: "#",
					status: "Production"
				},
				{
					title: "Quantum State Manager",
					description: "An experimental state management library for React focusing on atomic updates and predictable rendering cycles.",
					tags: [
						"TypeScript",
						"React",
						"State Management"
					],
					github: "#",
					demo: "#",
					status: "Beta"
				},
				{
					title: "Neural Engine Interface",
					description: "Web interface for interacting with large language models, featuring real-time streaming, conversation branching, and context management.",
					tags: [
						"Remix",
						"Python",
						"Redis",
						"OpenAI"
					],
					github: "#",
					demo: "#",
					status: "Active"
				},
				{
					title: "Distributed File System GUI",
					description: "A cross-platform desktop application for managing distributed storage nodes with visual topology mapping.",
					tags: [
						"Electron",
						"React",
						"Rust"
					],
					github: "#",
					demo: "#",
					status: "Archived"
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
				className: "group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] flex flex-col",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex justify-between items-start mb-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700",
							children: ["Status: ", /* @__PURE__ */ jsx("span", {
								className: project.status === "Production" ? "text-emerald-400" : "text-amber-400",
								children: project.status
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex space-x-3 text-slate-400",
							children: [/* @__PURE__ */ jsx("a", {
								href: project.github,
								className: "hover:text-cyan-400 transition-colors",
								children: /* @__PURE__ */ jsx(Code2, { className: "w-5 h-5" })
							}), /* @__PURE__ */ jsx("a", {
								href: project.demo,
								className: "hover:text-cyan-400 transition-colors",
								children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5" })
							})]
						})]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors",
						children: project.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-slate-400 mb-8 flex-grow leading-relaxed",
						children: project.description
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2 mt-auto",
						children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", {
							className: "text-xs font-mono text-cyan-300 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-900/50",
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
	meta: () => meta$1
});
function meta$1({}) {
	return [{ title: "Blog | Portfolio" }, {
		name: "description",
		content: "Articles on software engineering and technology."
	}];
}
var blogs_default = UNSAFE_withComponentProps(function Blogs() {
	return /* @__PURE__ */ jsxs("div", {
		className: "py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "mb-12",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center space-x-3 text-cyan-400 mb-4",
					children: [/* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
						className: "font-mono text-xl tracking-tight",
						children: "/blog"
					})]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-bold text-white mb-6",
					children: "Technical Writings"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-slate-400",
					children: "Thoughts, learnings, and deep dives into software engineering, architecture, and developer tools."
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-8",
			children: [
				{
					title: "Architecting for Scale: A Deep Dive into Event-Driven Systems",
					excerpt: "Exploring the nuances of building decoupled systems using Apache Kafka and Go. We look at common pitfalls and strategies for robust data streaming.",
					date: "2024-05-12",
					readTime: "8 min read",
					slug: "architecting-for-scale"
				},
				{
					title: "The Future of React: Server Components Explained",
					excerpt: "Demystifying React Server Components (RSC) and how they fundamentally change the way we think about rendering and data fetching in modern web apps.",
					date: "2024-04-28",
					readTime: "6 min read",
					slug: "react-server-components"
				},
				{
					title: "Optimizing PostgreSQL for Read-Heavy Workloads",
					excerpt: "A practical guide to indexing, materialized views, and query optimization techniques for scaling read performance in production databases.",
					date: "2024-03-15",
					readTime: "12 min read",
					slug: "postgresql-optimization"
				}
			].map((post, index) => /* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { delay: index * .1 },
				children: /* @__PURE__ */ jsxs("article", {
					className: "group relative bg-slate-900/40 border border-slate-800/60 rounded-2xl p-8 hover:bg-slate-800/40 hover:border-cyan-500/30 transition-all",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center space-x-4 text-sm font-mono text-slate-400 mb-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center space-x-1",
									children: [/* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: post.date })]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-slate-600",
									children: "|"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center space-x-1 text-cyan-400/80",
									children: [/* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: post.readTime })]
								})
							]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors",
							children: post.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-slate-400 mb-6 leading-relaxed",
							children: post.excerpt
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "#",
							className: "inline-flex items-center space-x-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors",
							children: [/* @__PURE__ */ jsx("span", { children: "Read Article" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
						})
					]
				})
			}, post.slug))
		})]
	});
});
//#endregion
//#region app/routes/contact.tsx
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => contact_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Contact | Portfolio" }, {
		name: "description",
		content: "Get in touch with me."
	}];
}
var contact_default = UNSAFE_withComponentProps(function Contact() {
	return /* @__PURE__ */ jsxs("div", {
		className: "py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "text-center mb-16",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "inline-flex items-center space-x-3 text-cyan-400 mb-4 justify-center",
					children: [/* @__PURE__ */ jsx(Terminal, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("h2", {
						className: "font-mono text-xl tracking-tight",
						children: "/initiate-handshake"
					})]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-6xl font-bold text-white mb-6",
					children: "Let's Build Something"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xl text-slate-400 max-w-2xl mx-auto",
					children: "Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
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
				className: "bg-slate-900/50 border border-slate-800 rounded-2xl p-8",
				children: /* @__PURE__ */ jsxs("form", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "name",
							className: "block text-sm font-mono text-slate-400 mb-2",
							children: "name"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							id: "name",
							className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-mono",
							placeholder: "John Doe"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "email",
							className: "block text-sm font-mono text-slate-400 mb-2",
							children: "email"
						}), /* @__PURE__ */ jsx("input", {
							type: "email",
							id: "email",
							className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-mono",
							placeholder: "john@example.com"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "message",
							className: "block text-sm font-mono text-slate-400 mb-2",
							children: "message"
						}), /* @__PURE__ */ jsx("textarea", {
							id: "message",
							rows: 5,
							className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-mono resize-none",
							placeholder: "Hello there..."
						})] }),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							className: "w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors",
							children: [/* @__PURE__ */ jsx(Send, { className: "w-5 h-5" }), /* @__PURE__ */ jsx("span", { children: "Send Message" })]
						})
					]
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
				className: "flex flex-col justify-center space-y-8 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-start space-x-4 group",
					children: [/* @__PURE__ */ jsx("div", {
						className: "p-4 bg-slate-900 border border-slate-800 rounded-xl text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 transition-all",
						children: /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8" })
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-white font-semibold text-lg mb-1",
							children: "Email"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-slate-400 mb-2",
							children: "Reach out directly via email"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "mailto:hello@example.com",
							className: "text-cyan-400 font-mono hover:underline",
							children: "hello@example.com"
						})
					] })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-start space-x-4 group",
					children: [/* @__PURE__ */ jsx("div", {
						className: "p-4 bg-slate-900 border border-slate-800 rounded-xl text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 transition-all",
						children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-8 h-8" })
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-white font-semibold text-lg mb-1",
							children: "Social Networks"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-slate-400 mb-2",
							children: "Find me on the internet"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex space-x-4 text-cyan-400 font-mono",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "#",
									className: "hover:underline",
									children: "Twitter"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("a", {
									href: "#",
									className: "hover:underline",
									children: "LinkedIn"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("a", {
									href: "#",
									className: "hover:underline",
									children: "GitHub"
								})
							]
						})
					] })]
				})]
			})]
		})]
	});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-DY-8UWlb.js",
		"imports": ["/assets/jsx-runtime-HcI2CTzw.js", "/assets/components-C4357y_e.js"],
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
			"module": "/assets/root-Bh7FICQm.js",
			"imports": [
				"/assets/jsx-runtime-HcI2CTzw.js",
				"/assets/components-C4357y_e.js",
				"/assets/lib-BcgMNBaN.js",
				"/assets/proxy-Dlr7vSR4.js",
				"/assets/code-xml-9Ru9t79j.js",
				"/assets/user-CT3FiE1H.js",
				"/assets/file-text-D4t-W5Fe.js",
				"/assets/mail-ChJrKkyS.js",
				"/assets/terminal-3GLKAlZl.js"
			],
			"css": ["/assets/root-B_8pw3x5.css"],
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
			"module": "/assets/home-NTMfm14S.js",
			"imports": [
				"/assets/jsx-runtime-HcI2CTzw.js",
				"/assets/lib-BcgMNBaN.js",
				"/assets/proxy-Dlr7vSR4.js",
				"/assets/code-xml-9Ru9t79j.js",
				"/assets/terminal-3GLKAlZl.js",
				"/assets/components-C4357y_e.js"
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
			"module": "/assets/about-83uMSYR_.js",
			"imports": [
				"/assets/jsx-runtime-HcI2CTzw.js",
				"/assets/proxy-Dlr7vSR4.js",
				"/assets/user-CT3FiE1H.js"
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
			"module": "/assets/projects-jZZJMn2J.js",
			"imports": [
				"/assets/jsx-runtime-HcI2CTzw.js",
				"/assets/proxy-Dlr7vSR4.js",
				"/assets/code-xml-9Ru9t79j.js"
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
			"module": "/assets/blogs-CYLPv9ku.js",
			"imports": [
				"/assets/jsx-runtime-HcI2CTzw.js",
				"/assets/lib-BcgMNBaN.js",
				"/assets/proxy-Dlr7vSR4.js",
				"/assets/file-text-D4t-W5Fe.js",
				"/assets/components-C4357y_e.js"
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
			"module": "/assets/contact-BNTMsNEE.js",
			"imports": [
				"/assets/jsx-runtime-HcI2CTzw.js",
				"/assets/proxy-Dlr7vSR4.js",
				"/assets/mail-ChJrKkyS.js",
				"/assets/terminal-3GLKAlZl.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-af7b7add.js",
	"version": "af7b7add",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = { "unstable_optimizeDeps": false };
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
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
	"routes/contact": {
		id: "routes/contact",
		parentId: "root",
		path: "contact",
		index: void 0,
		caseSensitive: void 0,
		module: contact_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
