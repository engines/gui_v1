app.selections = {
  resolve_strings: [
    "_Engines_Builder(ctype)",
    "_Engines_Builder(cont_user_id)",
    "_Engines_Builder(engine_name)",
    "_Engines_Builder(environments)",
    "_Engines_Builder(memory)",
    "_Engines_Builder(hostname)",
    "_Engines_Builder(domain_name)",
    "_Engines_Builder(repository)",
    "_Engines_Builder(http_protocol)",
    "_Engines_Builder(fqdn)",
    "_Engines_Builder(domain)",
    "_Engines_Builder(web_port)",
    "_Engines_Builder(build_name)",
    "_Engines_Builder(runtime)",
    "_Engines_Builder(set_environments)",
    "_Engines_Builder(engine_environment)",
    "_Engines_Builder(blueprint)",
    "_Engines_Builder(logs_container)",
    "_Engines_Builder(data_gid)",
    "_Engines_Builder(group_uid)",
    "_Engines_Builder(data_uid)",
    "_Engines_Builder(memory)",
    "_Engines_System(flavor)",
    "_Engines_System(pgsql_host)",
    "_Engines_System(mysql_host)",
    "_Engines_System(mongo_host)",
    "_Engines_System(internal_domain)",
    "_Engines_System(smtp_host)",
    "_Engines_System(timezone_country_city)",
    "_Engines_System(timezone)",
    "_Engines_System(hrs_from_gmt)",
    "_Engines_System(default_domain)",
    "_Engines_System(internal_domain)",
    "_Engines_System(publickey)",
    "_Engines_System(pubkey(type))",
    "_Engines_System(random(int))",
    "_Engines_System(service_resource(< service name >,< resource name >))",
    "_Engines_System(mgmt_host)",
    "_Engines_System(system_ip)",
    "_Engines_System(docker_ip)",
    "_Engines_System(system_hostname)",
    "_Engines_Environment(< env name >)",
    "_Engines_Field(< field name >)",
  ],
  frameworks: {
    "apache_php": "Apache PHP",
    "apache_php56": "Apache PHP 5/6",
    "base_c": "Base C",
    "docker": "Docker",
    "jetty": "Jetty",
    "lua": "Lua",
    "meteor": "Meteor",
    "nginx": "NGINX",
    "node": "Node",
    "node11": "Node 11",
    "node10": "Node 10",
    "node8": "Node 8",
    "node7": "Node 7",
    "node6": "Node 6",
    "node4": "Node 4",
    "openjdk11": "OpenJDK 11",
    "openjdk8": "OpenJDK 8",
    "python": "Python",
    "python3.7": "Python 3.7",
    "rails5": "Rails 5",
    "rails4": "Rails 4",
    "rbase3.5": "R Base 3.5",
    "rbase3.4": "R Base 3.4",
    "sinatra": "Sinatra",
    "tomcat9": "Tomcat 9",
    "tomcat8": "Tomcat 8",
    "x11": "X11",
  },
  template_file_modes: {
    "javascript": "Javascript",
    "json": "JSON",
    "lua": "Lua",
    "shell": "Shell",
    "php": "PHP",
    "python": "Python",
    "r": "R",
    "text": "Text",
    "yaml": "YAML"
  },
  script_modes: {
    "javascript": "Javascript",
    "lua": "Lua",
    "shell": "Shell",
    "php": "PHP",
    "python": "Python",
    "r": "R",
    "text": "Text"
  },
  database_seed_modes: {
    "javascript": "Javascript",
    "lua": "Lua",
    "nosql": "NoSQL",
    "php": "PHP",
    "python": "Python",
    "r": "R",
    "shell": "Shell",
    "sql": "SQL",
    "text": "Text"
  },
  required_module_types: {
    "apache": "Apache",
    "lua": "Lua",
    "npm": "NPM",
    "pear": "PEAR",
    "pecl": "PECL",
    "php": "PHP"
  },
  type_paths: [
    "auth",
    "avahi",
    "backup",
    "cert_auth",
    "cron",
    "database/nosql/mongo",
    "database/sql/mysql",
    "database/sql/pgsql",
    "dhcpd",
    "dns",
    "dyndns",
    "email",
    "filesystem/local/filesystem",
    "filesystem/remote/nfs",
    "filesystem/service/ftp",
    "filesystem/service/nfs",
    "firstrun",
    "imap",
    "ldap",
    "log_rotate",
    "logview",
    "mgmt",
    "nginx",
    "nosql_database",
    "redis",
    "schedule",
    "smtp",
    "syslog",
    "system",
    "wwwstats"
  ],
  actionator_return_types: {
    none: 'None',
    plain_text: 'Plain text',
    markdown: 'Markdown',
    json: 'JSON',
    yaml: 'YAML',
    url: 'URL',
    file: 'File',
  },
  input_types: {
    boolean: "boolean [ Deprecated in favour of checkbox_boolean ]",
    checkbox: "checkbox (Single check box. Uses first item in collection for unchecked and second item for checked.)",
    checkbox_boolean: "checkbox_boolean (Single check box. Returns 'true' when checked, otherwise 'false'. Input label shown beside checkbox.)",
    check_boxes: "check_boxes [ Deprecated in favour of checkboxes ]",
    checkboxes: "checkboxes (Multiple checkboxes. Return an array of checked values. Value can be a comma-separated list. Uses collection for checkbox values and labels.)",
    country: "country (Returns two-letter country code.)",
    date: "date",
    datetime: "datetime",
    decimal: "decimal",
    email: "email",
    file: "file",
    float: "float",
    hidden: "hidden",
    integer: "integer",
    language: "language (Returns two-letter language code.)",
    password: "password",
    password_with_confirmation: "password_with_confirmation",
    radio_buttons: "radio_buttons (Uses collection for radio button values and labels.)",
    // range: "range",
    select: "select (Uses collection for list values and labels.)",
    select_multiple: "select_multiple (Return an array of selected values. Value can be a comma-separated list. Uses collection for list values and labels.)",
    select_with_input: "select_with_input (Select with user input. Uses collection for list values and labels.)",
    string: "string (Single line of text.)",
    time: "time",
    time_zone: "time_zone",
    tel: "tel",
    text: "text (Multiple lines of text.)",
    url: "url",
    uuid: "uuid"
  }
}
