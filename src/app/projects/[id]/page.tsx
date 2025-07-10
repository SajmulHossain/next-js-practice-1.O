
const page = async ({params}: {params: {id: Promise<string>}}) => {
    const {id} = await params;
    console.log(id);
    return (
        <div>
            details page
        </div>
    );
};

export default page;