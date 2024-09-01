FROM alpine:3.10

COPY <<EOF /entrypoint.sh
#!/bin/sh -l

echo "Hello \$1"
time=\$(date)
echo "sample_output=\$time" >> \$GITHUB_OUTPUT
EOF

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
