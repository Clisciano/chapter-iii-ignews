import { GetStaticProps } from "next";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";

import Link from 'next/link';

import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Head from "next/head";

import styles from '../post.module.scss'
import { useEffect } from "react";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }  
}

export default function PostPreview( { post }: PostPreviewProps) {
  const [ session ] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])
  
  return(
    <>
    <Head>
      <title>{post.title} | Ignews</title>      
    </Head>

    <main className={styles.container}>
      <article className={styles.post}>
        <h1>{post.title}</h1>
        <time>{post.updatedAt}</time>
        <div 
          className={`${styles.postContent} ${styles.previewContent}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className={styles.continueReadings}>
          Wanna continue reading?
          <Link href="/">
            <a href=""> Subscribe now 🤗</a>
          </Link>
        </div>
      </article>
    </main>
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { slug } = params; 

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    pdatedAt: format(
      parseISO(response.last_publication_date), 
      "dd 'de' MMMM 'de' yyyy", 
      { locale: pt }
    ) 
  };

  return {
    props: {
      post
    },
  }

}