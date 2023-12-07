import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./WelcomeStyles.scss";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <Container>
                    <Row>
                        <Col className="cards">
                            <Link href={route("find-numbers-game")}>
                                <Button className="main-text" variant="primary">
                                    Žaidimai su skaičiais
                                </Button>
                            </Link>
                        </Col>
                        <Col className="cards">
                            <Link href={route("find-numbers-game")}>
                                <Button className="main-text" variant="primary">
                                    Žaidimai su spalvom
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="cards">
                            <Link href={route("find-numbers-game")}>
                                <Button className="main-text" variant="primary">
                                    Žaidimai su raidėm
                                </Button>
                            </Link>
                        </Col>
                        <Col className="cards">
                            <Link href={route("find-numbers-game")}>
                                <Button className="main-text" variant="primary">
                                    Žaidimai su žodžiais
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
