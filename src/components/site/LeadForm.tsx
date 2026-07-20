import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SERVICES = [
  "Concierge Medicine",
  "Physical Health",
  "Behavioral Health",
  "Women's Health",
  "IV Drip Services",
  "Other",
];

export function LeadForm({ darkLabel = false }: { darkLabel?: boolean }) {
  const [loading, setLoading] = useState(false);
  const labelCls = darkLabel ? "text-white/85" : "text-navy";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          (e.target as HTMLFormElement).reset();
          toast.success("Thanks - we'll be in touch shortly.");
        }, 600);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name" className={labelCls}>Full name</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" className="bg-white" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className={labelCls}>Email</Label>
          <Input id="email" name="email" type="email" required placeholder="jane@example.com" className="bg-white" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="phone" className={labelCls}>Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(843) 555-0000" className="bg-white" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="service" className={labelCls}>Interested in</Label>
          <Select name="service">
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message" className={labelCls}>Message</Label>
        <Textarea id="message" name="message" rows={5} placeholder="Tell us a little about what you're looking for." className="bg-white" />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-medium text-navy shadow-sm transition hover:bg-gold/90 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Request a Welcome Visit"}
      </button>
    </form>
  );
}
