import Aside from "../components/Aside"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
                    <div className="flex">
                <Aside />
                <div className="p-12 w-screen">
                {children}
                </div>
            </div>

      


    )
}