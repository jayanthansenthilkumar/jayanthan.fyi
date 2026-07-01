import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { Calendar, Code, Code2, FileText, Mail, Menu, Terminal, User, UserPlus, X } from "lucide-react";
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
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/jayanthan.fyi/assets/entry.client-DWh1Np2W.js",
		"imports": ["/jayanthan.fyi/assets/jsx-runtime-hLY2Pdbr.js", "/jayanthan.fyi/assets/components-C8sdnw0C.js"],
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
			"module": "/jayanthan.fyi/assets/root-BN-JuC79.js",
			"imports": [
				"/jayanthan.fyi/assets/jsx-runtime-hLY2Pdbr.js",
				"/jayanthan.fyi/assets/components-C8sdnw0C.js",
				"/jayanthan.fyi/assets/lib-BuFnA07s.js",
				"/jayanthan.fyi/assets/createLucideIcon-A-vs1Wn3.js",
				"/jayanthan.fyi/assets/code-xml-KdNYH4uU.js",
				"/jayanthan.fyi/assets/calendar-DNxRkRGR.js",
				"/jayanthan.fyi/assets/code-C6qiL-BQ.js",
				"/jayanthan.fyi/assets/file-text-r0TDWI_4.js",
				"/jayanthan.fyi/assets/mail-B_JPgVda.js",
				"/jayanthan.fyi/assets/terminal-DLcgW_sD.js",
				"/jayanthan.fyi/assets/user-BzuKoOyS.js",
				"/jayanthan.fyi/assets/proxy-BU_8ppCP.js"
			],
			"css": ["/jayanthan.fyi/assets/root-BCcfPJcI.css"],
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
			"module": "/jayanthan.fyi/assets/home-CK8Rez5t.js",
			"imports": [
				"/jayanthan.fyi/assets/jsx-runtime-hLY2Pdbr.js",
				"/jayanthan.fyi/assets/lib-BuFnA07s.js",
				"/jayanthan.fyi/assets/createLucideIcon-A-vs1Wn3.js",
				"/jayanthan.fyi/assets/code-xml-KdNYH4uU.js",
				"/jayanthan.fyi/assets/file-text-r0TDWI_4.js",
				"/jayanthan.fyi/assets/folder-git-2-BRpdWXMA.js",
				"/jayanthan.fyi/assets/mail-B_JPgVda.js",
				"/jayanthan.fyi/assets/map-pin-BDen1DNE.js",
				"/jayanthan.fyi/assets/send-Cuj0hHPI.js",
				"/jayanthan.fyi/assets/user-BzuKoOyS.js",
				"/jayanthan.fyi/assets/proxy-BU_8ppCP.js",
				"/jayanthan.fyi/assets/components-C8sdnw0C.js"
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
			"module": "/jayanthan.fyi/assets/about-Dkg9ESIv.js",
			"imports": [
				"/jayanthan.fyi/assets/jsx-runtime-hLY2Pdbr.js",
				"/jayanthan.fyi/assets/createLucideIcon-A-vs1Wn3.js",
				"/jayanthan.fyi/assets/code-C6qiL-BQ.js",
				"/jayanthan.fyi/assets/user-BzuKoOyS.js",
				"/jayanthan.fyi/assets/proxy-BU_8ppCP.js"
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
			"module": "/jayanthan.fyi/assets/projects-osGcAi7c.js",
			"imports": [
				"/jayanthan.fyi/assets/jsx-runtime-hLY2Pdbr.js",
				"/jayanthan.fyi/assets/createLucideIcon-A-vs1Wn3.js",
				"/jayanthan.fyi/assets/code-xml-KdNYH4uU.js",
				"/jayanthan.fyi/assets/folder-git-2-BRpdWXMA.js",
				"/jayanthan.fyi/assets/proxy-BU_8ppCP.js"
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
			"module": "/jayanthan.fyi/assets/blogs-CbsMEqZp.js",
			"imports": [
				"/jayanthan.fyi/assets/jsx-runtime-hLY2Pdbr.js",
				"/jayanthan.fyi/assets/lib-BuFnA07s.js",
				"/jayanthan.fyi/assets/file-text-r0TDWI_4.js",
				"/jayanthan.fyi/assets/map-pin-BDen1DNE.js",
				"/jayanthan.fyi/assets/user-BzuKoOyS.js",
				"/jayanthan.fyi/assets/proxy-BU_8ppCP.js",
				"/jayanthan.fyi/assets/components-C8sdnw0C.js",
				"/jayanthan.fyi/assets/createLucideIcon-A-vs1Wn3.js"
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
			"module": "/jayanthan.fyi/assets/article-DzWQujZG.js",
			"imports": [
				"/jayanthan.fyi/assets/jsx-runtime-hLY2Pdbr.js",
				"/jayanthan.fyi/assets/lib-BuFnA07s.js",
				"/jayanthan.fyi/assets/createLucideIcon-A-vs1Wn3.js",
				"/jayanthan.fyi/assets/calendar-DNxRkRGR.js",
				"/jayanthan.fyi/assets/proxy-BU_8ppCP.js",
				"/jayanthan.fyi/assets/components-C8sdnw0C.js"
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
			"module": "/jayanthan.fyi/assets/contact-lTsV_rR-.js",
			"imports": [
				"/jayanthan.fyi/assets/jsx-runtime-hLY2Pdbr.js",
				"/jayanthan.fyi/assets/createLucideIcon-A-vs1Wn3.js",
				"/jayanthan.fyi/assets/mail-B_JPgVda.js",
				"/jayanthan.fyi/assets/map-pin-BDen1DNE.js",
				"/jayanthan.fyi/assets/send-Cuj0hHPI.js",
				"/jayanthan.fyi/assets/terminal-DLcgW_sD.js",
				"/jayanthan.fyi/assets/proxy-BU_8ppCP.js"
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
			"module": "/jayanthan.fyi/assets/resume-FlMTmRat.js",
			"imports": [
				"/jayanthan.fyi/assets/jsx-runtime-hLY2Pdbr.js",
				"/jayanthan.fyi/assets/createLucideIcon-A-vs1Wn3.js",
				"/jayanthan.fyi/assets/file-text-r0TDWI_4.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/jayanthan.fyi/assets/manifest-9e6e32cb.js",
	"version": "9e6e32cb",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var route1 = { default: () => null };
var route2 = { default: () => null };
var route3 = { default: () => null };
var route4 = { default: () => null };
var route5 = { default: () => null };
var route6 = { default: () => null };
var route7 = { default: () => null };
var assetsBuildDirectory = "build\\client";
var basename = "/jayanthan.fyi/";
var future = { "unstable_optimizeDeps": false };
var ssr = false;
var isSpaMode = true;
var prerender = [];
var routeDiscovery = { "mode": "initial" };
var publicPath = "/jayanthan.fyi/";
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
		module: route1
	},
	"routes/about": {
		id: "routes/about",
		parentId: "root",
		path: "about",
		index: void 0,
		caseSensitive: void 0,
		module: route2
	},
	"routes/projects": {
		id: "routes/projects",
		parentId: "root",
		path: "projects",
		index: void 0,
		caseSensitive: void 0,
		module: route3
	},
	"routes/blogs": {
		id: "routes/blogs",
		parentId: "root",
		path: "blogs",
		index: void 0,
		caseSensitive: void 0,
		module: route4
	},
	"routes/article": {
		id: "routes/article",
		parentId: "root",
		path: "blogs/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: route5
	},
	"routes/contact": {
		id: "routes/contact",
		parentId: "root",
		path: "contact",
		index: void 0,
		caseSensitive: void 0,
		module: route6
	},
	"routes/resume": {
		id: "routes/resume",
		parentId: "root",
		path: "resume",
		index: void 0,
		caseSensitive: void 0,
		module: route7
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
