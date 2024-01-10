import React from "react";
import Link from "next/link";
import { FacebookIcon, TelegramIcon, TwitterIcon } from "./Icons";
import { Instagram, Twitter, Github } from "lucide-react";

function Footer() {
	return (
		<footer className="border-t border-slate-200">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-8">
					{/* Top area */}
					<div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-4">
						<div className="shrink-0 mr-4">
							{/* Logo */}
							<Link
								className="inline-flex group mb-8 md:mb-0 text-primary"
								href="/"
							>
								<img
									src="/logo-blue-top.png"
									alt="bloom genesis"
									className="h-[36px]"
								/>
							</Link>
						</div>
						{/* Right links */}
						{/* <div className="text-sm font-medium md:order-1 mb-2 md:mb-0">
              <ul className="inline-flex flex-wrap text-sm space-x-6">
                <li>
                  <Link className="text-slate-500 hover:underline" href="/post/kjzl6cwe1jw14b9pin02aak0ot08wvnrhzf8buujkop28swyxnvtsjdye742jo6">
                    Learn more
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-500 hover:underline" href="https://useorbis.com" target="_blank">
                    Go to useorbis.com
                  </Link>
                </li>

              </ul>
            </div> */}
					</div>

					{/* Bottom area */}
					<div className="text-center md:flex md:items-center md:justify-between">
						{/* Social links */}
						<ul className="inline-flex mb-4 md:order-1 md:ml-4 md:mb-0 space-x-4">
							<li>
								<Link
									className="flex justify-center items-center text-brand text-brand-hover"
									target="_blank"
									href="https://t.me/BloomGenesis"
								>
									<TelegramIcon width="20" height="20" />
								</Link>
							</li>
							<li>
								<Link
									className="flex justify-center items-center text-brand text-brand-hover"
									target="_blank"
									href="https://twitter.com/BloomGenesis1"
								>
									<Twitter width="20" height="20" />
								</Link>
							</li>
							<li>
								<Link
									className="flex justify-center items-center text-brand text-brand-hover"
									target="_blank"
									href="https://www.instagram.com/bloomgenesis1/"
								>
									<Instagram width="20" height="20" />
								</Link>
							</li>
							<li>
								<Link
									className="flex justify-center items-center text-brand text-brand-hover"
									target="_blank"
									href="https://www.facebook.com/BloomGenesis1"
								>
									<FacebookIcon width="20" height="20" />
								</Link>
							</li>
							<li>
								<Link
									className="flex justify-center items-center text-brand text-brand-hover"
									target="_blank"
									href="https://github.com/bloomgenesis"
								>
									<Github width="20" height="20" />
								</Link>
							</li>
							{/* <li>
                              <Link
                                  className="flex justify-center items-center text-brand text-brand-hover"
                                  target="_blank"
                                  href="#"
                              >
                                  <GithubIcon />
                              </Link>
                          </li> */}
						</ul>

						{/* Copyright */}
						<div className="text-sm text-slate-600">
							Copyright ©{new Date().getFullYear()} Bloom Genesis. All rights
							reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
