// Installs necessary packages
const r_install = Deno.run({
    cmd: ['sudo', 'Rscript', '-e', "install.packages('renv')"]
});

await r_install.status();

// Installs dependencies
const r_deps = Deno.run({
    cmd: ['sudo', 'Rscript', '-e', "renv::restore()"]
});

await r_deps.status();

// Forwards the execution to the R script
const r_run = Deno.run({
    cmd: ['Rscript', './clean.R']
});

await r_run.status();
