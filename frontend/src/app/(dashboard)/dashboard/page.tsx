"use client";

import { graphql, usePreloadedQuery } from "react-relay";
import { Suspense } from "react";
import { PageHeader } from "@/components/labels/PageHeader";
import { cn } from "@/lib/utils";
import { GroupSection } from "@/components/dashboard/sections/GroupSection";
import { Section } from "@/components/dashboard/Section";
import { MyTimeline } from "@/components/dashboard/MyTimeline";
import { useDashboardQuery } from "../DashboardQueryProvider";

const DashboardQuery = graphql`
    query pageDashboardQuery {
        me {
            ...GroupSectionFragment
        }
    }
`;

const Dashboard = () => {
    const rootQueryRef = useDashboardQuery();
    const data = usePreloadedQuery(DashboardQuery, rootQueryRef);

    return (
        <Suspense fallback="Loading client side...">
            <PageHeader className={cn("mb-10")}>{`Welcome`}</PageHeader>
            <div className="grid gap-16">
                <GroupSection queryReference={data.me} />
                <Section title="recent activity">
                    <MyTimeline />
                </Section>
            </div>
        </Suspense>
    );
};

export default Dashboard;
