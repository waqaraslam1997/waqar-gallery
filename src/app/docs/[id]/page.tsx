import { Metadata } from "next";

type Props = {
    params: { id: string }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Page ${params.id}`)
        }, 1000);
    });
    return {
        title: `Feature ${title}`
    }
}

export default function FeatureId({ params }: Props) {
    return (
        <div>FeatureId of docs:  {params.id}</div>
    )
}
