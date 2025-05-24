if (window.location.pathname !== "/domain/registry/") {
    console.log("You are not on the correct page");
} else {
    const domains = [];
    document.querySelectorAll('a[href^="/subdomain/edit.php?edit_domain_id="]').forEach(a => {
        const domain = a.textContent.trim();
        if (domain) domains.push(domain);
    });
    console.log(domains.join('\n'));
}
