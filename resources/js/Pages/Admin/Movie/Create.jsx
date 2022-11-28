import Authenticated from "@/Layouts/Authenticated/Index";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import Checkbox from "@/Components/Checkbox";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <InputLabel forInput="name" value="Name" />
                <InputError message={errors.name} className="mt-2" />
                <TextInput
                    type="text"
                    name="name"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                    className="mb-4"
                />
                <InputLabel forInput="category" value="Category"  />
                <InputError message={errors.category} className="mt-2" />
                <TextInput
                    type="text"
                    name="category"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the category of the movie"
                    isError={errors.category}
                    className="mb-4"
                />
                <InputLabel forInput="video_url" value="Video URL"  />
                <InputError message={errors.video_url} className="mt-2" />
                <TextInput
                    type="text"
                    name="video_url"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the video url of the movie"
                    isError={errors.video_url}
                    className="mb-4"
                />
                <InputLabel forInput="thumbnail" value="Thumbnail"  />
                <InputError message={errors.thumbnail} className="mt-2" />
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert thumbnail of the movie"
                    isError={errors.thumbnail}
                    className="mb-4"
                />
                <InputLabel forInput="rating" value="Rating"  />
                <InputError message={errors.rating} className="mt-2" />
                <TextInput
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the rating of the movie"
                    isError={errors.rating}
                />
                <div className="flex flex-row items-center">
                    <InputLabel forInput="is_featured" value="Is Featured" className="ml-3 mt-1" />
                    <Checkbox name="is_featured" handleChange={(e) => setData("is_featured", e.target.checked)}/>
                </div>
                <PrimaryButton type="submit" className="mt-4" processing={processing}>
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}
