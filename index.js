import 'dotenv/config';
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);
import express from 'express';
import mongoose from 'mongoose';

