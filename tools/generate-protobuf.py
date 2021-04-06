#!/usr/bin/python3

import subprocess
import os
import argparse
import glob

parser = argparse.ArgumentParser(
    description='Generates protobuffer files for angular')

parser.add_argument('input', type=str, help='Input path of protobuf files')
parser.add_argument('output', type=str,
                    help='Output path of the Angular Protobuf Services')
parser.add_argument('protoc_gen_ng', type=str,
                    help='Path to the protoc gen ng plugin')
parser.add_argument('node_protoc', type=str,
                    help='Path to the node protoc generator')

args = parser.parse_args()


def checkPath(path):
    if not os.path.exists(path):
        raise Exception('invalid input path')


inputPath = os.path.abspath(args.input)
checkPath(inputPath)

outputPath = os.path.abspath(args.output)
checkPath(inputPath)

protocGenNgPath = os.path.abspath(args.protoc_gen_ng)
checkPath(protocGenNgPath)

nodeProtocPath = os.path.abspath(args.node_protoc)
checkPath(nodeProtocPath)

protoFiles = []
for root, dirs, files in os.walk(os.path.join(inputPath)):
    for name in files:
        path = os.path.join(root, name)
        ext = os.path.splitext(name)[1]
        if not ext == '.proto':
            continue

        protoFiles.append(path)


def generateProtoFiles(path):
    subprocess.run([
        nodeProtocPath,
        '--plugin=protoc-gen-ng=%s' % protocGenNgPath,
        '--ng_out=%s' % outputPath,
        '-I',
        inputPath,
        path
    ])


print('🚀 Generating Angular gRPC files...')

for filepath in protoFiles:
    generateProtoFiles(filepath)

print('🏁 Finished generating Angular gRPC files!')
