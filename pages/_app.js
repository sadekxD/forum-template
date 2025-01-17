import "@/styles/globals.css";
import { Orbis, OrbisProvider } from "@orbisclub/components";
import "@orbisclub/components/dist/index.modern.css";

/** Set the global forum context here (you can create categories using the dashboard by clicking on "Create a sub-context" from your main forum context) */
global.orbis_context =
	"kjzl6cwe1jw145kkabrx4jwtq7xisqurf8omcpdfcwq5smph8o21aym7t8ggq4f";

/** Set the global chat context here (the chat displayed when users click on the "Community Chat" button) */
global.orbis_chat_context =
	"kjzl6cwe1jw149zip1x40kody1zjujpenwihosv26ms9vqmfl5unbbxxr9yqou0";

let orbis = new Orbis({
    useLit: false,
    node: "https://node2.orbis.club",
    PINATA_GATEWAY: "https://orbis.mypinata.cloud/ipfs/",
    PINATA_API_KEY: process.env.pinata_api_key,
    PINATA_SECRET_API_KEY: process.env.pinata_secret_api_key,
});

export default function App({ Component, pageProps }) {
    return (
        <OrbisProvider defaultOrbis={orbis}>
            <Component {...pageProps} />
        </OrbisProvider>
    );
}
