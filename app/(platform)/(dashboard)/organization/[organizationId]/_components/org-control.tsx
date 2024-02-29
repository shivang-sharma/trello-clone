"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";
export const OrgControl = () => {
  const parms = useParams();
  const { setActive } = useOrganizationList();
  useEffect(() => {
    if (!setActive) return;
    setActive({
      organization: parms.organizationId as string,
    });
  }, [setActive, parms.organizationId]);
  return null;
};
