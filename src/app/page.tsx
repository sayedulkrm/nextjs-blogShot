import React from "react";
import styles from "./homepage.module.css";
import Featured from "@/components/utils/Featured/Featured";
import CategoryList from "@/components/utils/CategoryList/CategoryList";
import CardList from "@/components/utils/CardList/CardList";
import Menu from "@/components/utils/Menu/Menu";

const Home = () => {
    return (
        <div className="max-w-[1400px] m-auto h-full">
            <div className="w-full h-full p-5">
                <Featured />
                <CategoryList />

                <div className={styles.content}>
                    <CardList />
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Home;
