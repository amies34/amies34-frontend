import Image from "next/image";

export default function Home() {
	return (
		<div>
			<main className="bg-[#FAF3E1] flex flex-col items-center w-full">
				<div className="relative w-150 min-h-screen">
					<Image fill src="/images/under-construction.png" alt="under-construction-image" />
				</div>
			</main>
		</div>
	);
}
