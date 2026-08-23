import { Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSplitLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    const { name } = usePage().props;

    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-6 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col justify-between overflow-hidden bg-zinc-950 p-10 text-white lg:flex dark:border-r">
                <div
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{
                        background:
                            'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(14, 116, 144, 0.45), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 80%, rgba(79, 70, 229, 0.28), transparent 50%)',
                    }}
                />
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
                <Link
                    href={home()}
                    className="relative z-20 flex items-center gap-2 text-lg font-medium"
                >
                    <AppLogoIcon className="size-8 text-white" />
                    {name}
                </Link>
                <div className="relative z-20 max-w-md space-y-3">
                    <p className="text-sm font-medium tracking-wide text-cyan-200 uppercase">
                        Internship operations
                    </p>
                    <p className="text-3xl leading-tight font-semibold text-balance">
                        Connecting students, schools, and opportunities.
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-300">
                        One workspace for applications, deployments, attendance,
                        reports, and OJT completion.
                    </p>
                </div>
            </div>
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Link
                        href={home()}
                        className="relative z-20 flex items-center justify-center gap-2 lg:hidden"
                    >
                        <AppLogoIcon className="size-10 text-foreground" />
                        <span className="text-lg font-semibold">{name}</span>
                    </Link>
                    <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
                        <h1 className="text-xl font-medium">{title}</h1>
                        <p className="text-sm text-balance text-muted-foreground">
                            {description}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
