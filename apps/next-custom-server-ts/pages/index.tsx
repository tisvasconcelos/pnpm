import Link from 'next/link';
import log from "log";
import {Thing} from "@shared/header";
import {sum} from "@shared/cow";

export default function Home() {
    log(sum(1, 3).toString());

    return (
        <>
            <Thing />
            <ul>
                <li>
                    <Link href="/a" as="/a">
                        <a>a</a>
                    </Link>
                </li>
                <li>
                    <Link href="/b" as="/b">
                        <a>b</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}
