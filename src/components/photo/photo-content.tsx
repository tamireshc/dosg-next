"use client";

import styles from "./photo-content.module.css";
// import PhotoComments from './PhotoComments';
import { PhotoData } from "@/actions/photo-get";
import { UserContext } from "@/context/user-contex";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PhotoDelete from "./photo-delete";

const PhotoContent = ({
  data,
  single,
}: {
  data: PhotoData;
  single: boolean;
}) => {
  const userData = React.useContext(UserContext);

  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {userData?.user && userData?.user.username === photo.author ? (
              <PhotoDelete id={String(photo.id)} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      {/* <PhotoComments single={single} id={photo.id} comments={comments} /> */}
    </div>
  );
};

export default PhotoContent;
