import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b-1 bg-none h-12 flex items-center justify-center p-2"  >
        <div className="flex items-center gap-2 hover:bg-gray-200 rounded-sm cursor-pointer px-4 py-3 h-full w-full">
          <h1 className="text-sm font-semibold">DASH</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}